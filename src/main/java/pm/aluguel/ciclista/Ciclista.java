package pm.aluguel.ciclista;

import java.time.LocalDate;

public class Ciclista {
    private Integer id;
    private String email;
    private String nacionalidade;
    private LocalDate nascimento;
    private String nome;
    private String senha;

    public Ciclista(){

    }

    public Ciclista(String email,
                    String nacionalidade,
                    LocalDate nascimento,
                    String nome,
                    String senha) {
        this.email = email;
        this.nacionalidade = nacionalidade;
        this.nascimento = nascimento;
        this.nome = nome;
        this.senha = senha;
    }

    public Ciclista(Integer id,
                    String email,
                    String nacionalidade,
                    LocalDate nascimento,
                    String nome,
                    String senha) {
        this.id = id;
        this.email = email;
        this.nacionalidade = nacionalidade;
        this.nascimento = nascimento;
        this.nome = nome;
        this.senha = senha;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public String toString() {
        return "Ciclista{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", nacionalidade='" + nacionalidade + '\'' +
                ", nascimento=" + nascimento +
                ", nome='" + nome + '\'' +
                ", senha='" + senha + '\'' +
                '}';
    }
}
