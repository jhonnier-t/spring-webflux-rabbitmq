package com.test.softka.controllers;


import com.test.softka.dto.ResponseModelDto;
import com.test.softka.model.User;
import com.test.softka.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("/api/softka/user")
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "${URL_HOST_FRONT}")
    @PostMapping("/list")
    public ResponseEntity<Flux<ResponseModelDto<List<User>>>> listUsers(@RequestBody User user) {
        List<User> userList = userService.getAllUsers();
        if (!userList.isEmpty()){
            return new ResponseEntity<>(Flux.just(new ResponseModelDto<>(HttpStatus.OK.value(),
                    "List user successful", userList)),
                    HttpStatus.OK);
        }
         return new ResponseEntity<>(Flux.just(new ResponseModelDto<>(HttpStatus.BAD_REQUEST.value(),
                "List user empty", userList)),
                HttpStatus.BAD_REQUEST);
    }

}
