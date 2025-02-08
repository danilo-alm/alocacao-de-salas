package com.ufal.alocacaodesalasbackend.util.room;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RoomType {
    CLASSROOM("Classroom"),
    LABORATORY("Laboratory"),
    AUDITORIUM("Auditorium"),
    SPORTS_COURT("Sports court"),
    COURTYARD("Courtyard"),
    GREEN_AREA("Green area");

    private final String value;
}
