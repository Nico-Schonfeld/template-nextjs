import CryptoJS from "crypto-js";
// Asegúrate de usar una clave secreta compleja y única. No la expongas ni la hardcodees en tu código directamente.
const secretKey = process.env.NEXT_PRIVATE_KEY_ENCODE;
const secretKey2 = process.env.NEXT_PUBLIC_KEY_ENCODE;
// Función para cifrar un ID
export const encryptId = (id: string): string => {
  return secretKey ? CryptoJS.AES.encrypt(id, secretKey).toString() : "";
};

export const encryptIdPublic = (id: string): string | null => {
  return secretKey2 ? CryptoJS.AES.encrypt(id, secretKey2).toString() : "";
};

// Función para descifrar un ID
export const decryptId = (cipherText: string): string | null => {
  if (!secretKey || !cipherText) {
    return null;
  }
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const decryptIdPublic = (cipherText: string): string | null => {
  if (!secretKey2 || !cipherText) {
    return null;
  }
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey2);

  return bytes.toString(CryptoJS.enc.Utf8);
};


// Funcionamiento:
{
  /* <button
  className={`${styles["button-movement"]}`}
  style={{
    border: "none",
    outline: "none",
    background: "transparent",
  }}
  onClick={() => {
    const provinceIdEncrypted = encodeURIComponent(
      encryptIdPublic(cardId) || ""
    );

    router.push(
      `/home/cards/detalle?data=${provinceIdEncrypted}`
    );
  }}
>
  Button
</button>; */
}

/* import { MemberPromotionsContainer } from "@/containers/CardsContainer";
import { decryptId } from "@/utils/EncodeDecode/UrlEncodeDecode";
import { notFound } from "next/navigation";

const MemberPromotions = ({
  searchParams,
}: {
  searchParams: { data: string };
}) => {
  let cardId;
  const originalCode = decodeURIComponent(searchParams.data);
  const decodeFormString = decryptId(originalCode);
  cardId = decodeFormString ?? undefined;

  if (cardId) {
    return <MemberPromotionsContainer cardId={cardId} />;
  }

  notFound();
};

export default MemberPromotions;
 */
