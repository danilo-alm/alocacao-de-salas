package com.ufal.alocacaodesalasbackend.domain.allocation;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
import java.math.BigInteger;

@Embeddable
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class AllocationId implements Serializable {
    @Column(name = "room_id")
    private BigInteger room;

    @Column(name = "user_id")
    private BigInteger user;
}
