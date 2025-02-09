package com.ufal.alocacaodesalasbackend.domain.allocation;

import com.ufal.alocacaodesalasbackend.domain.Room;
import com.ufal.alocacaodesalasbackend.domain.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(
        name = "allocation",
        indexes = {
                @Index(name = "IX_Allocation_Identifier", columnList = "Identifier")
        },
        uniqueConstraints = {
                @UniqueConstraint(name = "UX_Allocations_UserId_RoomId_Allocation", columnNames = {"userId", "roomId", "allocation"})
        }
)
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
@EqualsAndHashCode
@IdClass(value = AllocationId.class)
public class Allocation {
    @EmbeddedId
    private AllocationId id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("roomId")
    @JoinColumn(name = "room_id", nullable = false, updatable = false, columnDefinition = "BIGINT UNSIGNED NOT NULL", foreignKey = @ForeignKey(name = "FK_Allocations_Rooms"))
    private Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("userId")
    @JoinColumn(name = "user_id", nullable = false, updatable = false, columnDefinition = "BIGINT UNSIGNED NOT NULL", foreignKey = @ForeignKey(name = "FK_Allocations_Users"))
    private User user;
}
