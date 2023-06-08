package pm.aluguel.ciclista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public List<Ciclista> getCiclistas() {
        return ciclistaService.getCiclistas();
    }
    @PostMapping
    public void registrarNovoCiclista(@RequestBody Ciclista ciclista){
        ciclistaService.adicionarNovoCiclista(ciclista);
    }
    @DeleteMapping(path = "{idCiclista}")
    public void removerCiclista(@PathVariable("idCiclista") int idCiclista){
        ciclistaService.removerCiclista(idCiclista);
    }

    @PutMapping(path = "{idCiclista}")
    public void atualizarCiclista(
            @PathVariable("idCiclista") int idCiclista,
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) String email){
        ciclistaService.atualizarCiclista(idCiclista,nome,email);
    }
}
