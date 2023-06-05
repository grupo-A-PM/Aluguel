package pm.aluguel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pm.aluguel.ciclista.Ciclista;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }


}

