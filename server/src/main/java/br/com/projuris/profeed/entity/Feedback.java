package br.com.projuris.profeed.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pf_feedback")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Feedback extends GenericEntity {

    @NotNull(message = "Text cannot be null")
    @Column(columnDefinition="TEXT")
    @Length(max = 2000)
    private String text;

    private Boolean anonymous = Boolean.FALSE;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_from_id")
    private User userFrom;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "user_to_id")
    private User userTo;

    @Transient
    private Long userFromId;

    @Transient
    private Long userToId;


}
