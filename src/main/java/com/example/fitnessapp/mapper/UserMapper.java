package com.example.fitnessapp.mapper;

import com.example.fitnessapp.dto.UserDto;
import com.example.fitnessapp.entity.User;

public class UserMapper {
    public static UserDto mapToUserDto(User user){
        return new UserDto(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPassWord(),
                user.getFitnessLevel(),
                user.getHeight(),
                user.getWeight(),
                user.getMedicalCondition(),
                user.getDietryPlan()

        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getFullName(),
                userDto.getEmail(),
                userDto.getPassWord(),
                userDto.getFitnessLevel(),
                userDto.getHeight(),
                userDto.getWeight(),
                userDto.getMedicalCondition(),
                userDto.getDietryPlan()
        );
    }
}
