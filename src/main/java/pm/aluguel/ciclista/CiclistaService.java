package pm.aluguel.ciclista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

@Service
public class CiclistaService {

    private final CiclistaRepository ciclistaRepository;

    @Autowired
    public CiclistaService(CiclistaRepository ciclistaRepository) {
        this.ciclistaRepository = ciclistaRepository;
    }

    public List<Ciclista> getCiclistas() {
        return ciclistaRepository.findAll();
    }

    public void adicionarNovoCiclista(Ciclista ciclista) {
        Optional<Ciclista> ciclistaOpcional = ciclistaRepository.findCiclistaBy(ciclista.getEmail());
        if(ciclistaOpcional.isPresent()){
            throw new IllegalStateException("Email esta em uso");
        }
        ciclistaRepository.save(ciclista);
    }

}
