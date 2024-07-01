package com.test.softka.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseModelDto<T> {
    private int statusCode;
    private String statusMessage;
    private T data;
}
