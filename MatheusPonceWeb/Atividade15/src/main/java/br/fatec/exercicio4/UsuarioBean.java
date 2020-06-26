/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.fatec.exercicio4;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;

/**
 *
 * @author eduardo
 */

@ManagedBean(name="user")
@RequestScoped
public class UsuarioBean extends java.lang.Object {
    private String nome,
            email,
            senha,
            confirmaSenha;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getConfirmaSenha() {
        return confirmaSenha;
    }

    public void setConfirmaSenha(String confirmaSenha) {
        this.confirmaSenha = confirmaSenha;
    }
    
    public String operacao() {
        return "resultado";
    }
    
    public String novo() {
        return "usuario";
    }
    
    public String salvar() {
        FacesContext context = FacesContext.getCurrentInstance();
        if(!this.senha.equalsIgnoreCase(this.confirmaSenha)) {
            context.addMessage(
                null,
                new FacesMessage(
                    FacesMessage.SEVERITY_ERROR,
                    "senhas diferentes",
                    ""
                )
            );
            return "usuario";
        }
        return "mostrausuario";
    }

}
