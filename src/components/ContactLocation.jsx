export default function ContactLocation() {
  return (
    <section className="contact-location">
      <h3>Our Offices</h3>
      <p>Jacaranda, Watamu, Kenya<br />P.O. Box 802802-00100</p>
      <iframe
        src="https://www.google.com/maps?q=Jacaranda,+Watamu,+Kenya&output=embed"
        width="100%" height="220"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        title="Jacaranda Watamu Map"
      />
    </section>
  );
}
