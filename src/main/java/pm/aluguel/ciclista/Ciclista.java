package pm.aluguel.ciclista;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Ciclista {
    @Id
    @SequenceGenerator(
            name = "ciclista_sequence",
            sequenceName = "ciclista_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "ciclista_sequence"
    )
    private Integer id;
    private String nome;
    private LocalDate nascimento;
    private String cpf;
    private String numeroPassaporte;
    private LocalDate validadePassaporte;
    private String paisPassaporte;
    private String nacionalidade;
    private String email;
    private String urlFotoDocumento;
    private String senha;
    private String nomeTitularCartao;
    private Integer numeroCartao;
    private LocalDate validadeCartao;
    private Integer cvvCartao;

    public Ciclista(){

    }

    public Ciclista(Integer id, String nome, LocalDate nascimento, String cpf, String numeroPassaporte, LocalDate validadePassaporte, String paisPassaporte, String nacionalidade, String email, String urlFotoDocumento, String senha, String nomeTitularCartao, Integer numeroCartao, LocalDate validadeCartao, Integer cvvCartao) {
        this.id = id;
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.numeroPassaporte = numeroPassaporte;
        this.validadePassaporte = validadePassaporte;
        this.paisPassaporte = paisPassaporte;
        this.nacionalidade = nacionalidade;
        this.email = email;
        this.urlFotoDocumento = urlFotoDocumento;
        this.senha = senha;
        this.nomeTitularCartao = nomeTitularCartao;
        this.numeroCartao = numeroCartao;
        this.validadeCartao = validadeCartao;
        this.cvvCartao = cvvCartao;
    }

    public Ciclista(String nome, LocalDate nascimento, String cpf, String numeroPassaporte, LocalDate validadePassaporte, String paisPassaporte, String nacionalidade, String email, String urlFotoDocumento, String senha, String nomeTitularCartao, Integer numeroCartao, LocalDate validadeCartao, Integer cvvCartao) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.cpf = cpf;
        this.numeroPassaporte = numeroPassaporte;
        this.validadePassaporte = validadePassaporte;
        this.paisPassaporte = paisPassaporte;
        this.nacionalidade = nacionalidade;
        this.email = email;
        this.urlFotoDocumento = urlFotoDocumento;
        this.senha = senha;
        this.nomeTitularCartao = nomeTitularCartao;
        this.numeroCartao = numeroCartao;
        this.validadeCartao = validadeCartao;
        this.cvvCartao = cvvCartao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNumeroPassaporte() {
        return numeroPassaporte;
    }

    public void setNumeroPassaporte(String numeroPassaporte) {
        this.numeroPassaporte = numeroPassaporte;
    }

    public LocalDate getValidadePassaporte() {
        return validadePassaporte;
    }

    public void setValidadePassaporte(LocalDate validadePassaporte) {
        this.validadePassaporte = validadePassaporte;
    }

    public String getPaisPassaporte() {
        return paisPassaporte;
    }

    public void setPaisPassaporte(String paisPassaporte) {
        this.paisPassaporte = paisPassaporte;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrlFotoDocumento() {
        return urlFotoDocumento;
    }

    public void setUrlFotoDocumento(String urlFotoDocumento) {
        this.urlFotoDocumento = urlFotoDocumento;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNomeTitularCartao() {
        return nomeTitularCartao;
    }

    public void setNomeTitularCartao(String nomeTitularCartao) {
        this.nomeTitularCartao = nomeTitularCartao;
    }

    public Integer getNumeroCartao() {
        return numeroCartao;
    }

    public void setNumeroCartao(Integer numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    public LocalDate getValidadeCartao() {
        return validadeCartao;
    }

    public void setValidadeCartao(LocalDate validadeCartao) {
        this.validadeCartao = validadeCartao;
    }

    public Integer getCvvCartao() {
        return cvvCartao;
    }

    public void setCvvCartao(Integer cvvCartao) {
        this.cvvCartao = cvvCartao;
    }

    @Override
    public String toString() {
        return "Ciclista{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", nascimento=" + nascimento +
                ", cpf='" + cpf + '\'' +
                ", numeroPassaporte='" + numeroPassaporte + '\'' +
                ", validadePassaporte=" + validadePassaporte +
                ", paisPassaporte='" + paisPassaporte + '\'' +
                ", nacionalidade='" + nacionalidade + '\'' +
                ", email='" + email + '\'' +
                ", urlFotoDocumento='" + urlFotoDocumento + '\'' +
                ", senha='" + senha + '\'' +
                ", nomeTitularCartao='" + nomeTitularCartao + '\'' +
                ", numeroCartao=" + numeroCartao +
                ", validadeCartao=" + validadeCartao +
                ", cvvCartao=" + cvvCartao +
                '}';
    }
}
