# Documentação do projeto

---

### Diagrama ER

````mermaid
erDiagram
    USER {
        BIGINT id PK "AUTO_INCREMENT"
        VARCHAR username "NOT NULL UNIQUE (36)"
        CHAR password "NOT NULL (60)"
        BOOLEAN enabled "NOT NULL DEFAULT TRUE"
        VARCHAR email "NOT NULL UNIQUE (254)"
        VARCHAR fullName "NOT NULL (100)"
        TIMESTAMP createdAt "NOT NULL DEFAULT CURRENT_TIMESTAMP"
        TIMESTAMP updatedAt "NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        TIMESTAMP lastLogin
        INT failedLoginAttempts "NOT NULL DEFAULT 0"
    }

    AUTHORITY {
        BIGINT user_id PK,FK "NOT NULL"
        VARCHAR authority PK "NOT NULL (50)"
    }

    AUTHORITY_ID {
        BIGINT user_id PK,FK "NOT NULL"
        VARCHAR authority PK "NOT NULL (50)"
    }

    ROOM {
        BIGINT id PK "AUTO_INCREMENT"
        VARCHAR name "NOT NULL UNIQUE (100)"
        VARCHAR type "NOT NULL (50)"
    }
    
    ALLOCATION {
        BIGINT user_id PK, FK
        BIGINT room_id PK, FK
        BIGINT time_id PK, FK
        VARCHAR description
    }
    
    TIME {
        BIGINT id PK
        TIMESTAMP startTime
        TIMESTAMP endTime
    }

    USER ||--|{ AUTHORITY : has
    AUTHORITY ||--|| AUTHORITY_ID : composed_of
    USER ||--o{ ALLOCATION : has
    ALLOCATION ||--|| ROOM : of
    TIME ||--|| ALLOCATION : for
    
    
````

<!--

E
---
Usuário
Autoridade
Sala
Tempo

R
---
Alocação


-->