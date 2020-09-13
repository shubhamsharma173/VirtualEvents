import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator, } from '../../../components/common/CustomBootstrap';
import ThumbnailImage from '../../../components/cards/ThumbnailImage';
import ThumbnailLetters from '../../../components/cards/ThumbnailLetters';
import { adminRoot } from '../../../constants/defaultValues';

const ImageListPages = () => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalRight, setModalRight] = useState(false);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);

  return (
    <div style={{padding:"20px"}}>
      <Row>
    <Colxx xxs="12">
      <CardTitle className="mb-4">
      <div className="mb-2">
            <h1>
            Speakers
            </h1>
            <div className="text-zero top-right-button-container">
              <Button
                color="primary"
                size="lg"
                className="top-right-button"
                onClick={() => setModalRight(true)}
                >
                <IntlMessages id="ADD NEW" />
              </Button>
            <Modal
              isOpen={modalRight}
              toggle={() => setModalRight(!modalRight)}
              wrapClassName="modal-right"
            >
              <ModalHeader>Add New FAQ</ModalHeader>
              <ModalBody>

              </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalRight(false)}
                    align="right"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </Modal>
              </div>
      <Separator className="mb-5" />
      </div>
      </CardTitle>
      <Row>
        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/Shri%20Ajay%20Tyagi.png"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Mr. Ajay Tyagi</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                  Chairman (Securities and Exchange Board of India)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Mr. Ajay Tyagi
                    </ModalHeader>
                    <ModalBody>
                      Shri Ajay Tyagi took charge as Chairman, Securities and Exchange Board of India, on 01 March 2017. Prior to this, Shri Tyagi was Additional Secretary, Department of Economic Affairs, Ministry of Finance, Government of India, handling the portfolios of Capital Market Division, Investment Division, Infrastructure Division and Currency and Coinage Division. Shri Tyagi, an Indian Administrative Service Officer of Himachal Pradesh Cadre, has held several responsible positions with distinction in the State and Central Governments. He did his graduation in Electrical Engineering and Post Graduation in Computer Science. He also did his Masters in Public Administration from Harvard University.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/Ajay%20Bhushan%20Pandey.png"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Mr. Ajay Bhushan Pandey</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                Finance Secretary (Ministry of Finance)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Mr. Ajay Bhushan Pandey
                    </ModalHeader>
                    <ModalBody>
                      Finance Secretary, Dr. Ajay Bhushan Pandey has been at the helm of significant taxation reforms since he took over as the Revenue Secretary in Dec 2018. It is in his tenure that the corporate tax was reduced historically from 30% to 22% and for new manufacturers it was brought down to 15% without exemption, the lowest ever in any other country in the world. He fetched in the simplification of taxation processes and thereby enhanced transparency and accountability towards building a self-compliant society through use of technology and increased digitisation of the taxation system; and augmented revenue growth with data triangulation and data analytics without any overreach. It is under his term that India became one of the first countries in the world to switch to almost 100 % electronic filing. Dr. Pandey set his priorities among others to enhance tax compliance and increase tax base through integration of technology, improve Tax–GDP ratio, further stabilize implementation of Good & Services Tax (GST) and system based compliance without human interface, bring in transparency and simplification of laws and procedures for better tax administration without overreach and create ease of business. He has been involved and played a pivot role in introducing faceless assessment, faceless appeal, Document Identification Number (DIN) system, pre-filled income tax returns, quick refunds on ITRs, reduction in corporate tax rate, improved SFTs and 26 AS, quick and online PAN, New tax regime sans exemptions with much lower tax rates, TDS/TCS on cash dealings to stop leakages and tax avoidance and specific measures to bring down litigation in tax matters. In GST, in his capacity as Revenue Secretary and Member Secretary of the GST Council and, also, as the Chairman of GSTN, he has been continuously endeavouring for system’s upgradation, ease of doing business, revenue augmentation, electronic and faceless online facilitation of services to taxpayers such as filing of nil return just by an SMS. During this hard time of Covid-19, he has been resiliently involved in the government’s efforts of taking up Atamnirbhar Bharat Abhiyan to meet the challenges of pandemic induced lockdown to cater the needy and poor on the one hand and to fulfil demands coming from business and trading community, on the other. He believes that recent decisions of the government will help in laying the foundation of a simple and self-compliant tax regime, which will benefit both the taxpayers and the tax department and will go further to create non-litigant tax compliant society. With keen interest in technology and law, Dr. Pandey’s perseverance on putting technology to effect transformation and building faith on the institutions with transparent and responsive good governance practices has made him a quiet performer who delivers against all odds. He has proven this while steering the Government’s prestigious flagship identity programme – Aadhaar as its CEO, and also in straightening out the GSTN by settling smooth implementation as its Chairman. He was also an expert member of Srikrishna Committee on Data Protection Framework and is the Chairman of the Inter-Ministerial Co-ordination Committee (IMCC) to prevent money-laundering activities. An IAS officer with over 35+ years of experience in State and Central Governments, he had a remarkable stint of more than 9 years in UIDAI where he played a key role in establishing and steering Aadhaar across the country and drafting the historic Aadhaar legislation for providing statutory basis to Aadhaar. It was under his headship as CEO of UIDAI up till Oct. 2019 that this nodal agency had issued digital identity Aadhaar to more than 124 crore Indian residents. He also successfully explained Aadhaar and its benefits and the underlying technology to the 5-judges Constitution bench in the Supreme Court through his two-day long power point presentation in the open court room which helped the Government in successfully defending the Aadhaar case against 37 petitions. He is the only non-lawyer person and bureaucrat to have been ever allowed to address the Supreme Court Constitution Bench for six hours spread over two days. He was also instrumental in scaling up Aadhaar in delivery of government subsidies and benefits which led to savings of more than Rs. 1,40,000 crore so far by eliminating ghosts and duplicates and ensuring that the benefits reach the real and deserving beneficiaries. It is under his steering that Aadhaar has earned worldwide acclaim. He is also a recipient of the prestigious ET Award for Policy Change Agent for 2019. An Electrical Engineering graduate from IIT Kanpur, he joined the University of Minnesota in 1998 to obtain his MS and PhD in Computer Science and was later awarded Distinguished Leadership Award for Internationals by the University of Minnesota for his outstanding leadership accomplishments in his professional career.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/Tarun%20Bajaj.png"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Mr. Tarun Bajaj</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                  Secretary, Department of Economic Affairs (Ministry of Finance)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Mr. Tarun Bajaj
                    </ModalHeader>
                    <ModalBody>
                      Shri Tarun Bajaj assumed the responsibility of the Secretary, Department of Economic Affairs, Ministry of Finance on 1st May, 2020. He belongs to the Indian Administrative Service, 1988 batch, Haryana Cadre. Shri Bajaj has a Bachelor Degree in Commerce from Delhi University, MBA from IIM Ahmedabad and Post Graduate (M.Sc) from London School of Economics and Political Science. Shri Bajaj before joining the Department of Economic Affairs worked as Joint Secretary and Additional Secretary to the Prime Minister from April 2015 to April, 2020. He has served as Joint Secretary, Department of Economic Affairs in 2014-15 and as Director and Joint Secretary in the Department of Financial Services from 2006 to 2011. Shri Bajaj has over 31 years of experience in Administration, Management and Public Policy. He has primarily worked in the areas of Finance and Industry. Shri Bajaj has also served on the Boards of SIDBI, Bank of Maharashtra, Bank of India, New India Assurance Company, United India Insurance Company. Shri Bajaj currently chairs the National Investment and Infrastructure Fund (NIIF). He is currently also the Director on the Central Board of the Reserve Bank of India and SEBI. Shri Bajaj serves as Governor of India for International Fund for Agriculture Development (IFAD), and as Alternate Governor of India for the World Bank, Asian Development Bank (ADB), Asian Infrastructure Investment Bank (AIIB) and New Development Bank (NDB).
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/Tuhin%20Kanta%20Pandey%20-%20PHOTO%20-%203x3.jpg"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Mr. Tuhin Kanta Pandey</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                  Secretary DIPAM (Ministry of Finance)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Mr. Tuhin Kanta Pandey
                    </ModalHeader>
                    <ModalBody>
                    Shri TUHIN KANTA PANDEY, Secretary, Dept. of Investment and Public Asset Management (DIPAM) Ministry of Finance, Govt. of India Shri Tuhin Kanta Pandey, who is presently holding the charge of Secretary in the Dept. of Investment and Public Asset Management (DIPAM), M/o Finance, Govt. of India since 24th October, 2019, had joined the IAS in the year 1987 and was allotted Odisha cadre. Shri Pandey served as Joint Secretary in the then Planning Commission, Joint Secretary in the Cabinet Secretariat and Deputy Secretary in Ministry of Commerce at the Govt. of India. He held the key portfolio of Principal Secretary/ Addl. Chief Secretary, Finance Department, Govt. of Odisha during September 2016 till December 2018. He has also served as Health Secretary, Commissioner, Commercial Taxes, Transport Commissioner and Special Secretary, General Administration, Govt. of Odisha. In early part of his career, Shri Pandey served as Executive Director of Odisha State Finance Corporation and Managing Director of Odisha Small Industries Corporation and as Collector and District Magistrate of Sambalpur District. Shri Pandey has acquired wide experience in the areas of Economy & Finance, Industrial Development, Tax administration and has been instrumental in bringing about several institutional innovations, new policies and systems in the Departments he has served.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/K%20Rajaraman.png"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Mr. K. Rajaraman</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                  Additional Secretary, DEA (Ministry of Finance)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Mr. K. Rajaraman
                    </ModalHeader>
                    <ModalBody>
                      Shri K. Rajaraman, a senior Indian Administrative Service Officer of Tamil Nadu cadre, is a B. Tech in Electronics & Communications, a first class MBA and Master of Economics. Starting his career as a Design Engineer in BHEL, Trichy, during his rich and varied experience as an IAS Officer, he had held various administrative positions in the areas of Investment Promotion, Foreign Direct Investment, Public Sector Undertakings, Industrial Infrastructure, VAT Administration, etc. He was MD of Chennai Metro Railways for nearly 4 years during its early construction phase, Commissioner for Commercial Taxes in Government of Tamil Nadu and Joint Secretary Expenditure in Government of India in the recent past. He currently serves as Additional Secretary, Investment, IER and Admn. in the Department of Economic Affairs, Ministry of Finance. He has published articles in Business Line on ‘Right to Information’ and ‘Energy conservation Policy’. He is a certified trainer in Incident Command System for Disaster Management and has served as a Disaster Rescue Team leader in Nagapattinam (Tsunami relief) and Kanchipuram (Floods 2015, 2016). His special interest is in the field of Right to Information, Industrial Policy and Investment Promotion, Human Development, Consumer Protection, Disaster Management, Urban Mobility and Entrepreneurship.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx md="6" sm="6" lg="4" xxs="12">
          <Card className="mb-4">
            <CardBody>
              <div className="text-center">
                <CardImg
                  top
                  src="https://ficci-capam.framez.sg/speakerspic/Dr.%20Krishnamurthy%20V%20Subramanian.png"
                  alt="Card image cap"
                  className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                />
                <CardSubtitle className="mb-1">Dr. Krishnamurthy V Subramanian</CardSubtitle>
                <CardText className="text-muted text-small mb-4">
                  Chief Economic Advisor(Government of India)
                </CardText>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalBasic(true)}
                  >
                    Know More
                  </Button>
                  <Modal
                    isOpen={modalBasic}
                    toggle={() => setModalBasic(!modalBasic)}
                  >
                    <ModalHeader>
                      Dr. Krishnamurthy V Subramanian
                    </ModalHeader>
                    <ModalBody>
                      Dr. Krishnamurthy V Subramanian, currently the Chief Economic Advisor to the Government of India, is a leading expert on economic policy, banking and corporate governance. A PhD from Chicago-Booth and a top-ranking IIT-IIM alumnus, he authored the path-breaking Economic Survey that commends “Ethical Wealth Creation” for a prosperous India. By integrating India’s rich economic and spiritual heritage with modern economic ideas, he advocates ethical wealth creation through a marriage of the invisible hand of the market with the hand of trust. Given India’s tryst with socialistic ideas, where wealth and wealth creators were considered a necessary evil, the advocacy of ethical wealth creation has been hailed as a path-breaking departure in policy thinking. His idea of Thalinomics – what a common person pays for a vegetarian or non-vegetarian thali – has been acclaimed as the Indian Big Mac Index. The 2019 Economic Survey – again authored by Dr. Subramanian – laid out the Strategic Blueprint for India to become a $5 trillion economy by generating a virtuous cycle where private investment, wage and employment growth as well as consumption feed into each other. His push for the behavioural economics of Nudge has been acknowledged for its potential to bring behavioural change in India. The slew of reforms implemented in the Covid economic package draw on key reform ideas advocated by him in the Economic Surveys of 2019 and 2020.
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

    </Colxx>
  </Row>
    </div>
  );
};

export default ImageListPages;
