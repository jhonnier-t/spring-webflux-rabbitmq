package com.test.softka.controllers;


import com.test.softka.dto.ResponseModelDto;
import com.test.softka.model.Audit;
import com.test.softka.model.User;
import com.test.softka.services.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;


@RestController
@RequestMapping("/api/softka/audit")
public class AuditController {

    @Autowired
    private AuditService auditService;

    @CrossOrigin(origins = "${URL_HOST_FRONT}")
    @PostMapping("/list")
    public ResponseEntity<Flux<ResponseModelDto<List<Audit>>>> listAudit() {
        List<Audit> userList = auditService.findAllAudit();
        if (!userList.isEmpty()){
            return new ResponseEntity<>(Flux.just(new ResponseModelDto<>(HttpStatus.OK.value(),
                    "List audit successful", userList)),
                    HttpStatus.OK);
        }
         return new ResponseEntity<>(Flux.just(new ResponseModelDto<>(HttpStatus.BAD_REQUEST.value(),
                "List audit empty", userList)),
                HttpStatus.BAD_REQUEST);
    }
}
