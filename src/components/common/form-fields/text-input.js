import React from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'

export const TextInput = (props) => {

    const {label, error, className="mb-3", ...rest} = props;


  return (
    <FormGroup className={className} controlId={rest.name}> {/* controlId : form grubuna bir controlId atar ve bu erişilebilirlik açısından önemli, genellikle giriş alanının name özelliği ile aynıdır */}
    <FormLabel>{label}</FormLabel>
    <FormControl isInvalid={!!error} size="lg" {...rest} />
    <FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
  </FormGroup>
  )
};

/* buradaki controlId sayesinde giriş alanına bir kimlik atar, bu kimlik özellikle
erişilebilirlik (accessibility) açısından çok önemlidir. Ekran koruyucu gibi yardımcı teknolojilerle
bu kimliği kullanarak giriş alanını ve etiketini ilişkilendirir. */

/* isInvalid  özelliği React Bootstrap ın FormControl(giriş alanı) bileşenine uygulanan
bir boolean(doğru/yanlış) özelliğidir. Giriş alanının geçerli olup olmadığını belirtmek için kullanılır.
isInvalid özelliği, genellikle form doğrulama(form validation) işlemlerinde kullanılır;
1- kullanıcı zorunlu bir alanı boş bıraktığında,
2- kullanıcı bir e-posta alanına geçersiz bir e-posta girdiğinde,
3- kullanıcı şifre alanına belirtilen kriterlere uymayan bir şifre girdiğinde. */
