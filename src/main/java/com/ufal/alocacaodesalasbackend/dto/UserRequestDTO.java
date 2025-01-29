package com.ufal.alocacaodesalasbackend.dto;

import java.util.Set;

public record UserRequestDTO(String username, String password, String fullName, boolean enabled, String email,
                             Set<String> authorities) {
}
