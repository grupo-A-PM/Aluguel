package pm.aluguel.ciclista;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class CiclistaService {
    public List<Ciclista> getCiclistas(){
        return List.of(
                new Ciclista(
                        1,
                        "jgevelinoliveira@gmail.com",
                        "Brasil",
                        LocalDate.of(1990, Month.APRIL,13),
                        "Joao Gabriel",
                        "senha")
        );
    }
}
