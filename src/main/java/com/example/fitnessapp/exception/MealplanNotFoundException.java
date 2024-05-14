package com.example.fitnessapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MealplanNotFoundException extends  RuntimeException {
    public MealplanNotFoundException(String message) {
        super(message);
    }
}
