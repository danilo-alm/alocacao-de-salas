package com.ufal.alocacaodesalasbackend.dto;

import com.ufal.alocacaodesalasbackend.domain.User;
import com.ufal.alocacaodesalasbackend.domain.authority.Authority;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.Set;
import java.util.stream.Collectors;

public record UserResponseDTO(BigInteger id, String username, String fullName, String email,
                              Timestamp createdAt, Timestamp updatedAt, Timestamp lastLogin,
                              int failedLoginAttempts, boolean enabled, Set<String> authorities) {
    public UserResponseDTO(User user) {
        this(
            user.getId(),
            user.getUsername(),
            user.getFullName(),
            user.getEmail(),
            user.getCreatedAt(),
            user.getUpdatedAt(),
            user.getLastLogin(),
            user.getFailedLoginAttempts(),
            user.isEnabled(),
            user.getAuthorities().stream().map(Authority::getAuthority).collect(Collectors.toSet())
        );
    }
}
