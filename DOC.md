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
        BIGINT user_id FK "NOT NULL"
        VARCHAR authority "NOT NULL (50)"
    }

    ROOM {
        BIGINT id PK "SEQUENCE"
        VARCHAR name "NOT NULL UNIQUE (100)"
        VARCHAR type "NOT NULL (50)"
    }

    ALLOCATION {
        BIGINT user_id FK "NOT NULL"
        BIGINT room_id FK "NOT NULL"
        TIMESTAMP startTime
        TIMESTAMP endTime
        VARCHAR description
    }

    USER ||--|{ AUTHORITY : has
    USER ||--o{ ALLOCATION : makes
    ROOM ||--o{ ALLOCATION : of
````

---

### Comandos frequentes

- Se houve alterações no arquivo [compose.yaml](compose.yaml), atualizar as configurações:
  ````shell
  docker-compose up -d --build
  ````
- Para reconstruir e reiniciar o contâiner do Docker, para atualizar quaisquer alterações do repositório:
  ````shell
  docker-compose down
  docker-compose up -d --build
  ````
- Verificar execução do Docker: ``docker info``
- Verificar containers: ``docker ps -a``
- Listar contâiners e ids: ``docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Ports}}"``
- Acessar banco: ``docker exec -it <NOME_DO_CONTAINER> mariadb -u root -p``
