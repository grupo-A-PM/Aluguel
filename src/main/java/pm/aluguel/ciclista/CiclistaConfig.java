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
                    1,
                    "joao gabriel",
                    LocalDate.now(),
                    "cpf",
                    "123456",
                    LocalDate.now(),
                    "BR",
                    "Brasil",
                    "joaogabriel@gmail.com",
                    "www.urljgfoto.com",
                    "senhadojg",
                    "JOAO GABRIEL",
                    123456,
                    LocalDate.now(),
                    123
            );

            Ciclista JoaoPedro = new Ciclista(
                    2,
                    "joao pedro",
                    LocalDate.now(),
                    "cpf",
                    "123456",
                    LocalDate.now(),
                    "BR",
                    "Brasil",
                    "joaopedro@gmail.com",
                    "www.urljpfoto.com",
                    "senhadojp",
                    "JOAO PEDRO",
                    123456,
                    LocalDate.now(),
                    123
            );

            repository.saveAll(
                    List.of(JoaoGabriel,JoaoPedro)
            );
        };
    }
}
