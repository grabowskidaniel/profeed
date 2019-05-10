package br.com.projuris.profeed.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Entity
@Table(name = "pf_user")
public class User extends GenericEntity{

    @NotNull(message = "Name cannot be null")
    private String nome;

    @NotNull(message = "Email cannot be null")
    @Email(message = "Email should be valid")
    private String email;

    @NotNull(message = "Active cannot be null")
    private Boolean active;

    private String photoUrl;

}
