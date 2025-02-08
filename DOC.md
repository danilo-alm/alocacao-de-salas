# Documentação do projeto

---

### Diagrama de classes

````mermaid
classDiagram

    class AlocacaoDeSalasBackendApplication

%% Config
    class CustomUserDetailsService
    class SecurityConfig

%% Controller
    class UserController

%% Domain
    class User
    class Room

    class Authority {
        +User user
        +String authority
    }

    class AuthorityId {
        +Long userId
        +String authority
    }

%% DTOs
    class UserRequestDTO
    class UserResponseDTO

%% Exceptions
    class AuthorityException
    class UserNotFoundException

%% Repository
    class UserRepository
    class AuthorityRepository

%% Service
    class UserService
    class AuthorityService

%% Utility
    class RoomType

%% Relationships
    Authority --> AuthorityId
    Authority --> User
    User "1" --> "*" Authority
    User --> UserRepository
    UserService --> UserRepository
    AuthorityService --> AuthorityRepository
    UserController --> UserService

    CustomUserDetailsService --> UserService
    SecurityConfig --> CustomUserDetailsService
````

