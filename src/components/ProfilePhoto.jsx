import { useState } from "react";
import { initials, site } from "../data/site";

/**
 * Foto de perfil com fallback elegante (iniciais) caso a imagem
 * ainda não exista em public/foto-perfil.jpg.
 */
export default function ProfilePhoto({ className = "", alt }) {
  const [failed, setFailed] = useState(false);
  const label = alt || `Foto de ${site.name}`;

  if (site.photo && !failed) {
    return (
      <img
        className={className}
        src={site.photo}
        alt={label}
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`${className} photo-fallback`} role="img" aria-label={label}>
      <span aria-hidden="true">{initials}</span>
    </div>
  );
}
