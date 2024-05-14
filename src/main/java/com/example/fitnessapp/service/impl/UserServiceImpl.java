package com.example.fitnessapp.service.impl;

import com.example.fitnessapp.dto.UserDto;
import com.example.fitnessapp.entity.User;
import com.example.fitnessapp.exception.UserNotFoundException;
import com.example.fitnessapp.mapper.UserMapper;
import com.example.fitnessapp.repository.UserRepository;
import com.example.fitnessapp.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("Employee is not exist with give id" + userId));
   return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDto(user))
                .collect(Collectors.toList());

    }

    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User is not exists with given id:" + userId)
        );

        user.setFullName(updatedUser.getFullName());
        user.setEmail(updatedUser.getEmail());
        user.setPassWord(updatedUser.getPassWord());
        user.setFitnessLevel(updatedUser.getFitnessLevel());
        user.setHeight(updatedUser.getHeight());
        user.setWeight(updatedUser.getWeight());
        user.setMedicalCondition(updatedUser.getMedicalCondition());
        user.setDietryPlan(updatedUser.getDietryPlan());

        User updatedUserObj = userRepository.save(user);

        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new UserNotFoundException("User is not exists with given id:" + userId)
        );

        userRepository.deleteById(userId);

    }
}
