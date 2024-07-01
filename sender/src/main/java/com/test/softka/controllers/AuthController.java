package com.test.softka.controllers;

import com.test.softka.dto.ResponseModelDto;
import com.test.softka.model.Audit;
import com.test.softka.model.User;
import com.test.softka.services.AuditService;
import com.test.softka.services.UserService;
import com.test.softka.utils.enums.EventEnum;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/softka/auth")
public class AuthController {

    static final String topicExchangeName = "auditExchange";

    static final String routingKeyName = "exchange.softka.audit";

    @Autowired
    private UserService userService;

    private final RabbitTemplate rabbitTemplate;

    public AuthController(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @CrossOrigin(origins = "${URL_HOST_FRONT}")
    @PostMapping("/login")
    public ResponseEntity<Mono<ResponseModelDto<User>>> login(@RequestBody User user) {
        Audit auditEvent = new Audit(null, user.getEmail(), EventEnum.LOGIN.getValor(), LocalDateTime.now());
        rabbitTemplate.convertAndSend(topicExchangeName, routingKeyName, auditEvent);
        boolean statusAuth = userService.verifyAuthUser(user);
        if (statusAuth){

            User responseUser = userService.updateUserSession(user.getEmail(), true);
            return new ResponseEntity<>(Mono.just(new ResponseModelDto<>(HttpStatus.OK.value(),
                    "Login successful", responseUser)),
                    HttpStatus.OK);
        }
        return new ResponseEntity<>(Mono.just(new ResponseModelDto<>(HttpStatus.BAD_REQUEST.value(),
                "Login denied", user)),
                HttpStatus.BAD_REQUEST);
    }

    @CrossOrigin(origins = "${URL_HOST_FRONT}")
    @PostMapping("/logout")
    public ResponseEntity<Mono<ResponseModelDto<String>>> logout(@RequestBody User user) {
        Audit auditEvent = new Audit(null, user.getEmail(), EventEnum.LOGOUT.getValor(), LocalDateTime.now());
        rabbitTemplate.convertAndSend(topicExchangeName, routingKeyName, auditEvent);
        User UserUpdated = userService.updateUserSession(user.getEmail(), false);
        if (UserUpdated != null){
            return new ResponseEntity<>(Mono.just(new ResponseModelDto<>(HttpStatus.OK.value(),
                    "Logout successful", "Logout successful")),
                    HttpStatus.OK);
        }
         return new ResponseEntity<>(Mono.just(new ResponseModelDto<>(HttpStatus.BAD_REQUEST.value(),
                "Logout denied", "Logout denied")),
                HttpStatus.BAD_REQUEST);
    }
}


