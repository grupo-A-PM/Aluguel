package pm.aluguel.ciclista;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CiclistaConfig {

    @Bean
    CommandLineRunner commandLineRunner(CiclistaRepository repository){
        return args -> {
            Ciclista JoaoGabriel = new Ciclista(
                    "jgevelinoliveira@gmail.com",
                    "Brasil",
                    LocalDate.of(1990, Month.APRIL,13),
                    "Joao Gabriel",
                    "senha1"
            );

            Ciclista JoaoPedro = new Ciclista(
                    "jpedro@gmail.com",
                    "Brasil",
                    LocalDate.of(2000, Month.JANUARY,13),
                    "Joao Pedro",
                    "senha2"
            );

            repository.saveAll(
                    List.of(JoaoGabriel,JoaoPedro)
            );
        };
    }
}
