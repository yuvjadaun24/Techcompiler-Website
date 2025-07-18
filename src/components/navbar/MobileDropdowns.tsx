import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const serviceLinks = [
    {
        title: "Web & Application Development",
        links: [
            { name: "Application Services", href: "/services/web-dev" },
            { name: "Full Stack Development", href: "/services/Full-Stack-Development" },
        ],
    },
    {
        title: "Infrastructure & IT Management",
        links: [
            { name: "Infrastructure Service", href: "/services/Infrastructure-Services" },
            { name: "Managed IT Services", href: "/services/Managed-IT-Services" },
            { name: "IT Outsourcing", href: "/services/IT-Outsourcing" },
            { name: "DevOps", href: "/services/DevOps" },
        ],
    },
    {
        title: "Design",
        links: [{ name: "UI/UX Design", href: "/services/UI-UX-Designing" }],
    },
    {
        title: "Data & Intelligence",
        links: [
            { name: "Business Intelligence", href: "/services/Business-Intelligence" },
            { name: "Data Analytics", href: "/services/Data-Analytics" },
            { name: "Database Migration", href: "/services/Database-Migration" },
        ],
    },
    {
        title: "Embedded & Specialized Solutions",
        links: [{ name: "Embedded Product", href: "/services/Embedded-Product" }],
    },
];

const technologyLinks = [
    {
        title: "Frontend",
        links: [
            { name: "Angular JS", href: "/Technologies/Angular-JS" },
            { name: "React JS", href: "/Technologies/React-JS" },
            { name: "Vue.Js", href: "/Technologies/Vue-JS" },
            { name: "JavaScript", href: "/Technologies/JavaScript" },
            { name: "TypeScript", href: "/Technologies/TypeScript" },
            { name: "CSS3", href: "/Technologies/CSS-3" },
            { name: "HTML5", href: "/Technologies/HTML-5" },
        ],
    },
    {
        title: "Backend",
        links: [
            { name: ".NET", href: "/Technologies/Dot-Net" },
            { name: ".NET Core", href: "/Technologies/Dot-Net-Core" },
            { name: "PHP", href: "/Technologies/PHP" },
            { name: "JAVA", href: "/Technologies/Java" },
            { name: "Node.Js", href: "/Technologies/Node-JS" },
        ],
    },
    {
        title: "Mobile",
        links: [
            { name: "iOS", href: "/Technologies/IOS" },
            { name: "Android", href: "/Technologies/Android" },
            { name: "React Native", href: "/Technologies/React-Native" },
        ],
    },
    {
        title: "E-Commerce",
        links: [
            { name: "WooCommerce", href: "/Technologies/Woo-Commerce" },
            { name: "Magento", href: "/Technologies/Magento" },
        ],
    },
];

interface MobileDropdownsProps {
    setIsOpen: (isOpen: boolean) => void;
}

export const MobileServicesDropdown: React.FC<MobileDropdownsProps> = ({ setIsOpen }) => {
    const navigate = useNavigate();
    return (
        <Accordion type="multiple" className="w-full">
            {serviceLinks.map((category) => (
                <AccordionItem key={category.title} value={category.title}>
                    <AccordionTrigger className="text-sm font-semibold">{category.title}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-4">
                            {category.links.map((link) => (
                                <li key={link.name} onClick={() => { navigate(link.href); setIsOpen(false); }} className="cursor-pointer hover:text-gray-800 transition-colors duration-300">
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export const MobileTechnologiesDropdown: React.FC<MobileDropdownsProps> = ({ setIsOpen }) => {
    const navigate = useNavigate();
    return (
        <Accordion type="multiple" className="w-full">
            {technologyLinks.map((category) => (
                <AccordionItem key={category.title} value={category.title}>
                    <AccordionTrigger className="text-sm font-semibold">{category.title}</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-2 pl-4">
                            {category.links.map((link) => (
                                <li key={link.name} onClick={() => { navigate(link.href); setIsOpen(false); }} className="cursor-pointer hover:text-gray-800 transition-colors duration-300">
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}; 