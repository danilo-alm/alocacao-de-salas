package com.ufal.alocacaodesalasbackend.domain.allocation;

import com.ufal.alocacaodesalasbackend.domain.Room;
import com.ufal.alocacaodesalasbackend.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(
        name = "Allocation",
        indexes = {
                @Index(name = "IX_Allocation_Identifier", columnList = "Identifier")
        },
        uniqueConstraints = {}
)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
@EqualsAndHashCode
@SequenceGenerator(name = "alloc_seq", sequenceName = "allocation_sequence", allocationSize = 1)
public class Allocation {
    @EmbeddedId
    private AllocationId id;

    @ManyToOne
    @MapsId("roomId")
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
