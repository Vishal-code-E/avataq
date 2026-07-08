"use client";
import { PageLayout } from "../../components/PageLayout";

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="section" style={{ paddingTop: 168 }}>
        <div className="wrap" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h1 className="h1 reveal">Terms of Service</h1>
          <p className="lead reveal" style={{ marginTop: 24 }}>This page is coming soon.</p>
          <a className="txtlink reveal" href="/" style={{ marginTop: 32, justifyContent: "center" }}>
            ← Back to home
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
