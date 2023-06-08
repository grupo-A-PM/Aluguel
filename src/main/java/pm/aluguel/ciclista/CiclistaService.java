package pm.aluguel.ciclista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Objects;
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

    public void removerCiclista(int idCiclista){
        boolean existe = ciclistaRepository.existsById(idCiclista);
        if (!existe){
            throw new IllegalStateException("Ciclista com id "+ idCiclista + " não existe");
        }
        ciclistaRepository.deleteById(idCiclista);
    }

    @Transactional
    public void atualizarCiclista(int idCiclista,
                                  String nome,
                                  String email){
        Ciclista ciclista = ciclistaRepository
                .findById(idCiclista).orElseThrow(()->
                        new IllegalStateException("Ciclista com id "+ idCiclista + " não existe"));

        if (nome != null &&
                nome.length() > 0 &&
                !Objects.equals(ciclista.getNome(),nome)){
            ciclista.setNome(nome);
        }

        if (email != null &&
                email.length() > 0 &&
                !Objects.equals(ciclista.getEmail(),email)) {

            Optional<Ciclista> ciclistaOpcional = ciclistaRepository.findCiclistaBy(email);

            if(ciclistaOpcional.isPresent()) {
                throw new IllegalStateException("Email em uso");
            }
            ciclista.setEmail(email);
        }
    }

}
