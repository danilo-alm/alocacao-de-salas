package com.ufal.alocacaodesalasbackend.domain;

import com.ufal.alocacaodesalasbackend.util.RoomType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false)
    private int maxCapacity;

    @Column(nullable = false)
    private boolean isAvailable;

    @Column(nullable = false)
    private RoomType type;
}
