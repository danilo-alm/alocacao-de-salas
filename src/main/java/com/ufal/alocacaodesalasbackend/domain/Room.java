package com.ufal.alocacaodesalasbackend.domain;

import com.ufal.alocacaodesalasbackend.util.room.RoomStatus;
import com.ufal.alocacaodesalasbackend.util.room.RoomType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import java.math.BigInteger;

@Entity(name = "Room")
@Table(
        name = "Rooms",
        indexes = {
                @Index(name = "IX_Room_Identifier", columnList = "Identifier")
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@Builder
@EqualsAndHashCode(exclude = {})
@SequenceGenerator(name = "room_seq", sequenceName = "room_sequence", allocationSize = 1)
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "room_seq")
    @Column(name = "ID", nullable = false, updatable = false, columnDefinition = "BIGINT UNSIGNED", unique = true)
    private BigInteger id;

    @Column(name = "Nickname", nullable = false, unique = true, columnDefinition = "VARCHAR(100) NOT NULL UNIQUE")
    private String nickname;

    @Column(name = "MaxCapacity", nullable = false, columnDefinition = "INT UNSIGNED NOT NULL")
    private int maxCapacity;

    @Column(name = "IsAvailable", nullable = false, columnDefinition = "TINYINT(1) NOT NULL")
    private boolean isAvailable;

    @Column(name = "Type", nullable = false, columnDefinition = "VARCHAR(50) NOT NULL")
    @Enumerated(EnumType.STRING)
    private RoomType type;

    @Column(name = "Status", nullable = false, columnDefinition = "VARCHAR(50) NOT NULL")
    @Enumerated(EnumType.STRING)
    private RoomStatus status;
}
