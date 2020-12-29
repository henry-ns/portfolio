import React from 'react';
import ReactMarkdown from 'react-markdown';

import { GetStaticProps } from 'next';

import DynamicInput from '@/components/atoms/DynamicInput';
import { SEOProps } from '@/components/atoms/SEO';
import SocialList, { SocialMedia } from '@/components/molecules/SocialList';

import contentfulApi from '@/services/contentful';

import { formatLocation } from '@/utils/location';
import { SECTIONS_IDS } from '@/utils/sections';

import { Container } from '@/styles/pages/contact';

interface ContactData {
  name: string;
  title: string;
  description: string;
}

interface FormData {
  title: string;
  submitText: string;
  inputs: Array<{
    id: string;
    title: string;
    type: 'text' | 'textarea';
  }>;
}

interface ContactProps {
  SEO: SEOProps;
  title: string;
  description: string;
  socialData: SocialMedia[];
  form: FormData;
}

const formId = '6nqPg4eBYSDo4jE9SeQU8y';

const Contact: React.FC<ContactProps> = ({
  SEO,
  title,
  description,
  socialData,
  form,
}) => {
  return (
    <Container seo={SEO}>
      <ReactMarkdown>{title}</ReactMarkdown>

      <section>
        <form>
          {form.inputs.map((input) => (
            <DynamicInput key={input.id} type={input.type} />
          ))}

          <button type="submit">{form.submitText}</button>
        </form>

        <aside>
          <ReactMarkdown>{description}</ReactMarkdown>
          <SocialList items={socialData} isSecondary />
        </aside>
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const contactPromise = contentfulApi.getEntry<ContactData>(
    SECTIONS_IDS.contact,
    { locale: formatLocation(context.locale) },
  );

  const formPromise = contentfulApi.getEntry<FormData>(formId, {
    locale: formatLocation(context.locale),
  });

  const socialPromise = contentfulApi.getEntries({
    locale: formatLocation(context.locale),
    content_type: 'socialMedia',
  });

  const [contactData, formData, socialData] = await Promise.all([
    contactPromise,
    formPromise,
    socialPromise,
  ]);

  const { title, name, description } = contactData.fields;

  const SEO: SEOProps = {
    title: name,
  };

  return {
    props: {
      SEO,
      title,
      description,
      socialData: socialData.items,
      form: formData.fields,
    },
  };
};

export default Contact;
