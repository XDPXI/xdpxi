import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Content from "~/components/Content";
import Section from "~/components/Section";

export default function MyOwnCloudService() {
  return (
    <>
      <Header>Upgrading the Servers</Header>

      <Content>
        <Section>
          <p>
            Previously, our infrastructure was distributed across two separate
            low-end machines. Starting tomorrow, we will begin migrating all
            cloud instances to a significantly more powerful unified server
            designed to deliver better speed, stability, and long-term
            scalability.
          </p>
        </Section>

        <Section>
          <p>
            Our existing infrastructure currently runs on Syd01, powered by an
            i7 processor with 16GB RAM and 512GB of storage, and Syd02, powered
            by an i7 processor with 32GB RAM and 1TB of storage.
          </p>

          <p>
            Replacing both of these systems is Syd03, a brand new flagship
            server powered by an Intel i9-13900, 64GB of RAM, 4TB of storage,
            and an NVIDIA 5070 Ti GPU. This makes Syd03 the strongest and most
            capable machine ever introduced into XD's Cloud.
          </p>
        </Section>

        <Section>
          <p>
            Deployment to customer environments will begin immediately after the
            migration is completed.
          </p>

          <p>
            Pro and Enterprise customers will have priority access and will be
            upgraded first on May 2 at 1:00 AM. Starter customers will then be
            migrated on May 3 at 2:00 PM.
          </p>
        </Section>
      </Content>

      <Footer />
    </>
  );
}
