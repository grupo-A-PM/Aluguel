package pm.aluguel.ciclista;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CiclistaRepository
        extends JpaRepository<Ciclista,Integer> {

    @Query ("SELECT c FROM Ciclista c WHERE c.email = ?1")
    Optional<Ciclista> findCiclistaBy(String email);

}
