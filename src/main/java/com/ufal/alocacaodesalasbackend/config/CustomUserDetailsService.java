package com.ufal.alocacaodesalasbackend.config;

import com.ufal.alocacaodesalasbackend.domain.User;
import com.ufal.alocacaodesalasbackend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new
            UsernameNotFoundException(username));

        return new org.springframework.security.core.userdetails.User(
            user.getUsername(), user.getPassword(), user.getAuthorities()
        );
    }
}
