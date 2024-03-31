import Shell from "@/components/layout/Shell";
import { faqs } from "./constants";
import type { Metadata } from "next";
import { MdMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "OCCOVID | FAQ",
  description: "OCCOVID FAQ",
};

export default function FAQ() {
  return (
    <main className="">
      <Shell pageURL="/faq" title="FAQs" subtitle={""}>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Can’t find the answer you’re looking for? Reach out to me via
                  Email or Github.
                </p>
                <div className="mt-2 text-gray-600">
                  <a href="mailto:anthonydfnguyen@gmail.com">
                    <div className="flex items-center gap-2">
                      <MdMail className="w-10 h-10 " />
                      <div>anthonydfnguyen@gmail.com</div>
                    </div>
                  </a>
                </div>
                <div className="mt-2 text-gray-600">
                  <a href="https://github.com/anthony-df-nguyen/occovid-next">
                    <div className="flex items-center gap-2">
                      <FaGithub className="w-10 h-10" />
                      <div>Github Repo</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base leading-7 text-gray-600">
                        {faq.answer}
                      </dd>
                      <dd className="mt-2 text-base leading-7 text-blue-500 overflow-hidden">
                        <a
                          href={faq?.link}
                          target="_blank"
                        >
                          {faq?.link}
                        </a>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </main>
  );
}
