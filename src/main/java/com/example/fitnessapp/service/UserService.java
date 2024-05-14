package com.example.fitnessapp.service;

import com.example.fitnessapp.dto.UserDto;
import com.example.fitnessapp.entity.User;

import java.util.List;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(Long userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long userId, UserDto updatedUser);

    void deleteUser(Long userId);
}

