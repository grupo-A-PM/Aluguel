package pm.aluguel.ciclista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

//Recursos para a API
@RestController
@RequestMapping(path = "/ciclista")
public class CiclistaController {

    private final CiclistaService ciclistaService;

    @Autowired
    public CiclistaController(CiclistaService ciclistaService) {
        this.ciclistaService = ciclistaService;
    }

    @GetMapping
    public List<Ciclista> getCiclista() {
        return ciclistaService.getCiclistas();
    }

}
