import React from 'react'

function Privacypolicy() {
    return (
        <>
            <section className="mt-0" style={{ background: '#f1f1f1' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 px-4">
                            <div className="py-lg-5 pe-lg-5">
                                <h1 className="fw-400 fs-re-55"><span className="fw-bold text-success-dark-1">Flexworq</span><br /> Privacy policy</h1>
                                <p className="fsp-18 pe-lg-5">updated on 10 January 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <h1 className='text-primary mb-3 fsp-32 mt-5'>1. General</h1>
                    <h3 className='fsp-18 mb-3'>1.1 Flexworq</h3>
                    <p>Welcome to Flexworq, a platform of Flexworq B.V., with registered offices in Amsterdam and address at John M. Keynesplein 12, 1066 EP in Amsterdam, and registered in the commercial register under number 63682281.</p>
                    <h3 className='fsp-18 mb-3 mt-5'>1.2 About this policy</h3>
                    <p>We respect the privacy of our users and have developed this privacy policy to demonstrate our commitment to protecting your privacy. This policy describes the information we collect and how that information may be used. We encourage you to read this policy carefully when using our platform. By using our website, our platform, our app and our services, you are accepting the most recent terms and uses of this privacy policy. This policy is subject to change. We therefore recommend that you review this policy frequently.</p>

                    <h1 className='text-primary fsp-32 mt-6 mb-4'>2. Personal data</h1>

                    <h3 className='fsp-18 mb-3'>2.1 About the data we collect</h3>
                    <p>Flexworq collects and processes:</p>
                    <ol>
                        <li className='my-3'>personal information such as: name, address details, place of residence, age, contact details, Chamber of Commerce details, VAT number, identification, profile photos, bank and payment details, insurance details, invoices, content posted by you on our platform and our communication with you; and</li>
                        <li className='my-3'>Information about your use of our platform, such as: preferences for assignments, assignment history, login and cancellation history, hours worked, reviews, search history, payments, assignment agreements, assignment locations, click behaviour and response speed.</li>
                        <li className='my-3'>if you use the app: location data.</li>
                    </ol>

                    <h3 className='fsp-18 mb-3'>2.2 Purposes</h3>
                    <p>The main purposes for which Flexworq uses your personal data are:</p>
                    <ol>
                        <li className='my-3'>Offering the possibility of bidding for and acquiring contracts;</li>
                        <li className='my-3'>Identity verification. We ask for your ID/passport to check whether you are entitled to work in the Netherlands. Identity documents are deleted immediately after data processing. The user profile will not show the user's citizen service number, but will indicate that the user's ID has been verified and the last four characters of the document number will be processed;</li>
                        <li className='my-3'>Customer support. Through various tools, we help you with questions related to the platform. Flexworq also supports users in applying for a VAT number. Users send the completed application form to Flexworq, and Flexworq then sends the user's application to the tax authorities by mail. After user receives a VAT identification number from the Tax Office, the application form is automatically removed (after 31 days) from the server;</li>
                        <li>Analysis of your use of our platform;</li>
                        <li>Development of user profiles;</li>
                        <li>Placement of targeted and user profile-based advertisements;</li>
                        <li>Execution of our service and the user agreement for clients (the User Agreement); and</li>
                        <li>Optimisation of our service (including placing and finding orders and taking care of invoicing).</li>
                    </ol>

                    <h3 className='fsp-18 mb-3'>2.4 No information sharing</h3>
                    <p>We do not share personal data with third parties for no reason. We only do so when confirming availability for assignments and the conclusion of an assignment contract, for the investigation of fraudulent activities, for the implementation of provisions contained in the User Agreement, if consent has been given or if we are obliged to do so by law. We also use data, often anonymised, for analytical purposes. You will find a list of the cookies we use in article 4.</p>


                    <h3 className='fsp-18 mb-3'>2.5 On the protection of the data we collect</h3>
                    <p>Flexworq takes far-reaching measures to protect your personal data from unauthorised access and use. However, no system can be completely protected. We take measures at both technical and organisational level and do our utmost to treat your data confidentially. </p>



                    <h1 className='text-primary fsp-32 mt-6 mb-4'>3. Privacy policy of third parties</h1>
                    <p>Pages that Flexworq links to, partners of Flexworq and/or banners on Flexworq are not covered by this privacy policy. These third parties have independent privacy policies. For more information, please consult the privacy policies of these third parties.</p>

                    <h1 className='text-primary fsp-32 mt-6 mb-4'>4. Cookies</h1>
                    <h3 className='fsp-18 mb-3'>4.1 Flexworq uses cookies</h3>
                    <p>Flexworq uses cookies (see below) to improve your online experience and that of others. Cookies are small text files that are placed on your device by the browser. Among other things, these cookies ensure that your device with which you use our services is recognised. You can disable these cookies in your browser.</p>

                    <h3 className='fsp-18 mb-3'>4.2 Functional cookies</h3>
                    <p>Functional cookies ensure that Flexworq's platform works properly. For example, you can remain logged in to the website and/or app, and your preferences are saved.</p>

                    {/* tables */}

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='border-secondary w-50 fsp-13' style={{ background: '#E6E6FF', borderTopLeftRadius: '0.5rem' }}>Functional cookie</th>
                                <td className='fsp-13 bg-white' style={{ borderTopRightRadius: '0.5rem' }}>Storage period</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-50 fsp-13' style={{ background: '#E6E6FF' }}>Authentication status, Magic link & Email remembering</td>
                                <td className='fsp-13 bg-white'>Infinite</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-50 fsp-13' style={{ background: '#E6E6FF' }}>Referral code when you visit the platform via an 'Invite Friends' link</td>
                                <td className='fsp-13 bg-white'>6 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-50 fsp-13 border-bottom-0' style={{ background: '#E6E6FF', borderBottomLeftRadius: '0.5rem' }}>
                                    Functional use of local storage (saved as cookies in older browsers)<br />
                                    - Job search filters: chosen categories, distance and region<br />
                                    - Job search scroll position, date selection and list/grid view preference
                                </td>
                                <td className='fsp-13 bg-white border-bottom-0' style={{ borderBottomRightRadius: '0.5rem' }}>12 months</td>
                            </tr>
                        </tbody>
                    </table>


                    <h3 className='fsp-18 mb-3'>4.3 Analytical cookies</h3>
                    <p>These cookies help improve the Flexworq platform. The cookies collect information about how you use Flexworq's platform. This includes information about the most frequently visited pages, your click behaviour and the period of time you spend on our platform.</p>
                    {/* tables */}
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF', borderTopLeftRadius: '0.5rem' }}>Name</th>
                                <td className='fsp-13 bg-white w-25' style={{ borderTopRightRadius: '0.5rem' }}>Function</td>
                                <td className='fsp-13 bg-white w-25' style={{ borderTopRightRadius: '0.5rem' }}>Storage period</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Google Analytics</td>
                                <td className='fsp-13 bg-white w-25'>This tool gives each user a unique number with which to analyse data such as the number of pages visited, how many users we have in certain regions and which visitors click away immediately. The data analysed by Google Analytics is anonymised and not available to third parties.</td>
                                <td className='fsp-13 bg-white w-25'>26 months - this allows us to compare data every year.</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Intercom</td>
                                <td className='fsp-13 bg-white w-25'>Flexworq uses Intercom for support and to organise the user base.</td>
                                <td className='fsp-13 bg-white w-25'>As long as user is active on the platform. If user shows no activity for 12 months, personal data will be destroyed.</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Segment</td>
                                <td className='fsp-13 bg-white w-25'>Segment analyses the use of the platform.</td>
                                <td className='fsp-13 bg-white w-25'>As long as user is active on the platform. If the user has not shown any activity for 12 months, the personal data will be destroyed.</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Pipedrive</td>
                                <td className='fsp-13 bg-white w-25'>With this tool, we keep track of which stage of the registration process a (potential) user is in.</td>
                                <td className='fsp-13 bg-white w-25'>6 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Hotjar</td>
                                <td className='fsp-13 bg-white w-25'>Hotjar enables us to gain insight into how users navigate the platform. Subsequently, this tool gives us the opportunity to make improvements and thus enhance the user experience.</td>
                                <td className='fsp-13 bg-white w-25'>3 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>LinkedIn Insights Tag</td>
                                <td className='fsp-13 bg-white w-25'>The LinkedIn Insights Tag contains a piece of code that allows us to measure which pages users have visited on our website. This allows us to analyse the results of our ads on LinkedIn. The LinkedIn Insights Tag also keeps track of which users have signed up for Flexworq after clicking on an ad in LinkedIn.</td>
                                <td className='fsp-13 bg-white w-25'>180 days</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Braze</td>
                                <td className='fsp-13 bg-white w-25'>With Braze, we analyse the use of the platform.</td>
                                <td className='fsp-13 bg-white w-25'>As long as user is active on the platform. If the user has not shown any activity for 12 months, the personal data will be destroyed.</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13 border-bottom-0' style={{ background: '#E6E6FF', borderBottomLeftRadius: '0.5rem' }}>Pardot</td>
                                <td className='fsp-13 bg-white w-25 border-bottom-0'>Pardot tracks visitors' activities. The tool does not store any personally identifiable information, only a unique identifier.</td>
                                <td className='fsp-13 bg-white w-25 border-bottom-0' style={{ borderBottomRightRadius: '0.5rem' }}>As long as the user is active on the platform.</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className='fsp-18 mb-3'>4.4 Marketing and other cookies</h3>
                    <p>Marketing cookies are used, among other things, to show you relevant and personalised advertisements, to link with social media and to measure the effectiveness of an advertising campaign.</p>
                    {/* tables */}
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF', borderTopLeftRadius: '0.5rem' }}>Name</th>
                                <td className='fsp-13 bg-white w-25' style={{ borderTopRightRadius: '0.5rem' }}>Function</td>
                                <td className='fsp-13 bg-white w-25' style={{ borderTopRightRadius: '0.5rem' }}>Storage period</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Google Tag Manager</td>
                                <td className='fsp-13 bg-white w-25'>This tool is used to easily install data scripts on the platform without the need for a developer. Google Tag Manager does not collect personal data from users.</td>
                                <td className='fsp-13 bg-white w-25'>N/A</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Google Optimize</td>
                                <td className='fsp-13 bg-white w-25'>With Google Optimize, we run tests on the platform. For example, showing users different page options. The tool gains insight into the click and navigation behaviour of users.</td>
                                <td className='fsp-13 bg-white w-25'>6 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Google Adwords pixel</td>
                                <td className='fsp-13 bg-white w-25'>With this data script we keep track of which users have registered on the platform after clicking on an advertisement in Google search engine.</td>
                                <td className='fsp-13 bg-white w-25'>26 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Bing Ads pixel</td>
                                <td className='fsp-13 bg-white w-25'>This data script collects information about users who have registered on the platform after clicking on an advertisement in the Bing search engine.</td>
                                <td className='fsp-13 bg-white w-25'>26 months</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Trustpilot</td>
                                <td className='fsp-13 bg-white w-25'>This cookie establishes a link between the Flexworq platform and the Trustpilot review site. This enables new users to see directly on the Flexworq platform how many stars other users have given us on the Trustpilot review site. Trustpilot does not collect any other information from users.</td>
                                <td className='fsp-13 bg-white w-25'>N/A</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Facebook Pixel</td>
                                <td className='fsp-13 bg-white w-25'>The Facebook Pixel contains a piece of code that allows us to measure which pages users have visited on our website. This then allows us to create targeted ads. The Facebook Pixel also keeps track of which users have signed up for Flexworq after clicking on an ad in Facebook. Facebook can also place cookies - through integration with Braze - and thus receive information about your use of our platform and internet/apps. This allows them to show you personalised ads.</td>
                                <td className='fsp-13 bg-white w-25'>180 days</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Doubleclick</td>
                                <td className='fsp-13 bg-white w-25'>Doubleclick is a component where online banners can be displayed via the Google network. Doubleclick keeps track of how often these banners are clicked.</td>
                                <td className='fsp-13 bg-white w-25'>180 days</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>Daisycon pixel</td>
                                <td className='fsp-13 bg-white w-25'>This piece of script measures which affiliate websites have brought a new user to Flexworq. The pixel keeps track of address, name and phone numbers.</td>
                                <td className='fsp-13 bg-white w-25'>180 days</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 fsp-13' style={{ background: '#E6E6FF' }}>flexworq.you-canbook.me</td>
                                <td className='fsp-13 bg-white w-25'>Through this tool, users can indicate whether they would like help with the registration process. By entering name, phone number, email and city, Flexworq will contact the user at a preferred time.</td>
                                <td className='fsp-13 bg-white w-25'>This data is removed from the server as soon as we have contacted the user who requested it.</td>
                            </tr>
                            <tr>
                                <td className='border-secondary w-25 border-bottom-0 fsp-13' style={{ background: '#E6E6FF', borderBottomLeftRadius: '0.5rem' }}>Snapchat Pixel</td>
                                <td className='fsp-13 bg-white w-25 border-bottom-0'>The Snapchat pixel contains a piece of code that allows us to measure which users have registered after seeing a Flexworq ad on Snapchat. To do this, the pixel uses the user's phone number & email address.</td>
                                <td className='fsp-13 bg-white w-25 border-bottom-0' style={{ borderBottomRightRadius: '0.5rem' }}>180 days</td>
                            </tr>
                        </tbody>
                    </table>

                    <h1 className='text-primary fsp-32 mt-6 mb-4'>5. Data retrieval and deletion</h1>
                    <p>You can at all times request Flexworq to inspect your personal data. You can also request Flexworq to amend, supplement, delete, or block your personal data if it is incorrect, incomplete, or irrelevant, or is processed in violation of a statutory provision. Please use the e-mail address below to make a request.</p>

                    <h1 className='text-primary fsp-32 mt-6 mb-4'>6. Contact</h1>
                    <p className="mb-0 pb-10">For questions or comments, please contact us via email: <span className='text-primary'>privacy@flexworw</span>.</p>


                </div>
            </section>
        </>
    )
}

export default Privacypolicy