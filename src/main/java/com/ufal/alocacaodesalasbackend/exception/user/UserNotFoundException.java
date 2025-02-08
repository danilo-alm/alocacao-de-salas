package com.ufal.alocacaodesalasbackend.exception.user;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("user not found");
    }
}
