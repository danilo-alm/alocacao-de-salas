package com.ufal.alocacaodesalasbackend.repository;

import com.ufal.alocacaodesalasbackend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, BigInteger> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
