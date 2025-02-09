package com.ufal.alocacaodesalasbackend.domain.authority;

import com.ufal.alocacaodesalasbackend.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "authorities", uniqueConstraints = {
    @UniqueConstraint(name = "UX_Authorities_UserId_Authority", columnNames = {"userId", "authority"})
})
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@EqualsAndHashCode
@IdClass(AuthorityId.class)
public class Authority implements GrantedAuthority {
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", columnDefinition = "BIGINT UNSIGNED NOT NULL", foreignKey = @ForeignKey(name = "FK_Authorities_Users"))
    private User user;

    @Id
    @Column(name = "authority", columnDefinition = "VARCHAR(50) NOT NULL")
    private String authority;
}
