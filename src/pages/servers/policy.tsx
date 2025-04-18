import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Title from "~/components/Title";
import Section from "~/components/Section";
import Content from "~/components/Content";

export default function Home() {
    return (
        <>
            <Header>XD's Servers Policy</Header>

            <Content>
                <Section>
                    <p>
                        By using XD's Servers, you agree to be bound by the following
                        policy. This policy is a binding agreement between you and XD's
                        Servers. Your use of our services constitutes your full acceptance
                        of these terms and conditions.
                    </p>
                </Section>

                <Section>
                    <h2>1. Data Backup and Responsibility</h2>
                    <p>
                        While we take reasonable measures to ensure data integrity,
                        <b>we are not responsible for backups of your server data</b>. It is
                        your sole responsibility to maintain local backups of any important
                        files, configurations, and game data. We strongly recommend
                        implementing a regular backup schedule to protect against data loss.
                        We are not liable for any data loss incurred as a result of server
                        deletion, hardware failure, software bugs, user error, or other
                        unforeseen circumstances.
                    </p>
                </Section>

                <Section>
                    <h2>2. Resource Usage and Fair Use</h2>
                    <p>
                        Server resources (CPU, RAM, bandwidth) are allocated based on usage
                        and overall demand. We reserve the right to manage resource
                        allocation to ensure fair usage and optimal performance for all
                        users.
                    </p>
                    <p>
                        <b>Abuse of resources is strictly prohibited</b>. Examples of abuse
                        include, but are not limited to:
                    </p>
                    <ul>
                        <li>
                            Running resource-intensive processes unrelated to your service
                            (e.g., cryptocurrency mining).
                        </li>
                        <li>Attempting to circumvent resource limitations.</li>
                        <li>
                            Using the server for purposes other than its intended function.
                        </li>
                        <li>Operating botnets or engaging in malicious activity.</li>
                        <li>
                            Deliberately attempting to destabilize the server or other users'
                            services.
                        </li>
                    </ul>
                    <p>
                        Violations may result in throttling, suspension, or termination of
                        your server without prior notice. We reserve the right to define and
                        determine resource abuse at our sole and absolute discretion.
                    </p>
                </Section>

                <Section>
                    <h2>3. Security and Account Responsibility</h2>
                    <p>
                        You are responsible for maintaining the security of your server and
                        account. This includes:
                    </p>
                    <ul>
                        <li>Using strong, unique passwords.</li>
                        <li>Enabling Two-Factor Authentication (2FA) where available.</li>
                        <li>Regularly updating server software to the latest versions.</li>
                        <li>
                            Implementing appropriate security measures to prevent unauthorized
                            access (e.g., firewalls).
                        </li>
                        <li>Monitoring server logs for suspicious activity.</li>
                    </ul>
                    <p>
                        We are not responsible for{" "}
                        <b>compromised accounts or data breaches</b>
                        resulting from your failure to implement adequate security measures.
                        You are liable for all consequences resulting from unauthorized
                        access to your server. Please report any suspected security breaches
                        to us immediately.
                    </p>
                </Section>

                <Section>
                    <h2>4. Network Bandwidth</h2>
                    <p>
                        Excessive bandwidth usage that negatively impacts the network
                        performance of other users is prohibited. We reserve the right to
                        monitor bandwidth usage and implement restrictions or additional
                        charges if necessary.
                    </p>
                    <p>
                        Examples of excessive bandwidth usage include, but are not limited
                        to:
                    </p>
                    <ul>
                        <li>Hosting large files for public download.</li>
                        <li>Streaming video content from the server.</li>
                        <li>Operating a high-traffic website.</li>
                        <li>Running file-sharing services.</li>
                    </ul>
                    <p>
                        If your server consistently exceeds reasonable bandwidth limits, as
                        determined by our monitoring, we will contact you to discuss options
                        for reducing usage or upgrading your service plan. Failure to comply
                        may result in service suspension.
                    </p>
                </Section>

                <Section>
                    <h2>5. Server Downgrade Policy</h2>
                    <p>
                        To optimize resource allocation and provide cost-effective services,
                        servers with consistently low player counts may be downgraded to a
                        lower-end server configuration. We will evaluate server usage
                        periodically.
                    </p>
                    <p>
                        You have the option to maintain your current server configuration by
                        contacting us and paying the difference in cost. If you choose not
                        to pay the difference, your server will be downgraded.
                    </p>
                </Section>

                <Section>
                    <h2>6. Policy Modifications</h2>
                    <p>
                        We reserve the right to modify this policy at any time. We will make
                        reasonable efforts to notify users of <b>significant changes</b>{" "}
                        that may materially affect their services, such as changes to the
                        server deletion policy or resource allocation. We will attempt to
                        provide reasonable advance notice, but are not required to do so.
                        Notification will typically be provided via email to the server
                        owner's registered email address and/or through announcements on our
                        website or control panel. It is your responsibility to review this
                        policy periodically for updates. Continued use of our services after
                        any modifications constitutes your acceptance of the revised policy.
                    </p>
                </Section>

                <Section>
                    <h2>7. Contact Information</h2>
                    <p>
                        If you have any questions about this policy, please contact us at
                        <span className="highlight-text">xdpxi@proton.me</span>.
                    </p>
                </Section>
            </Content>

            <Title>XD's Minecraft Servers Policy</Title>

            <Content>
                <Section>
                    <p>
                        The following policy applies specifically to XD's Minecraft Servers,
                        in addition to the general policy above. In case of conflict, this
                        Minecraft policy takes precedence for Minecraft servers.
                    </p>
                </Section>

                <Section>
                    <h2>1. Server Inactivity and Deletion</h2>
                    <p>
                        To ensure efficient resource management, servers exhibiting
                        inactivity will be subject to the following policy:
                    </p>
                    <ul>
                        <li>
                            <b>Freezing:</b> Servers will be automatically frozen after
                            <b>7 consecutive days of inactivity</b>. Inactivity is defined as
                            no active players and no administrative access or modifications to
                            the server.
                        </li>
                        <li>
                            <b>Deletion:</b> Frozen servers will be permanently deleted after
                            an additional <b>14 consecutive days of inactivity</b>. A warning
                            notification will be sent to the server owner's registered email
                            address and/or discord account <b>3 days</b> prior to deletion.
                        </li>
                    </ul>
                    <p>
                        It is your responsibility to maintain server activity to avoid
                        automatic removal. Regular logins, player activity, or
                        administrative changes will prevent your server from being
                        classNameified as inactive. The notification is a courtesy; failure
                        to receive the notification for any reason does not prevent the
                        server from being deleted according to this policy.
                    </p>
                </Section>

                <Section>
                    <h2>2. Resource Usage and Fair Use</h2>
                    <p>
                        Server resources (CPU, RAM, bandwidth) are allocated based on usage
                        and overall demand. We reserve the right to manage resource
                        allocation to ensure fair usage and optimal performance for all
                        users.
                    </p>
                    <p>
                        <b>Abuse of resources is strictly prohibited</b>. Examples of abuse
                        include, but are not limited to:
                    </p>
                    <ul>
                        <li>
                            Running resource-intensive processes unrelated to the game server.
                        </li>
                        <li>Attempting to circumvent resource limitations.</li>
                        <li>
                            Using the server for purposes other than its intended gaming
                            function.
                        </li>
                        <li>Operating botnets or engaging in malicious activity.</li>
                        <li>
                            Running automated farming or other AFK activities that negatively
                            impact server performance.
                        </li>
                    </ul>
                    <p>
                        Violations may result in throttling, suspension, or termination of
                        your server without prior notice. We reserve the right to define and
                        determine resource abuse at our sole and absolute discretion.
                    </p>
                </Section>

                <Section>
                    <h2>3. Security and Account Responsibility</h2>
                    <p>
                        You are responsible for maintaining the security of your server and
                        account. This includes:
                    </p>
                    <ul>
                        <li>Using strong, unique passwords.</li>
                        <li>Enabling Two-Factor Authentication (2FA) where available.</li>
                        <li>
                            Regularly updating server software and plugins to the latest
                            versions.
                        </li>
                        <li>
                            Implementing appropriate security measures to prevent unauthorized
                            access.
                        </li>
                        <li>Monitoring server logs for suspicious activity.</li>
                    </ul>
                    <p>
                        We are not responsible for{" "}
                        <b>compromised accounts or data breaches</b>
                        resulting from your failure to implement adequate security measures.
                        You are liable for all consequences resulting from unauthorized
                        access to your server. Please report any suspected security breaches
                        to us immediately.
                    </p>
                </Section>

                <Section>
                    <h2>4. Network Bandwidth</h2>
                    <p>
                        Excessive bandwidth usage that negatively impacts the network
                        performance of other users is prohibited. We reserve the right to
                        monitor bandwidth usage and implement restrictions or additional
                        charges if necessary.
                    </p>
                    <p>
                        Examples of excessive bandwidth usage include, but are not limited
                        to:
                    </p>
                    <ul>
                        <li>Hosting large files for public download.</li>
                        <li>Streaming video content from the server.</li>
                        <li>Operating a high-traffic website.</li>
                    </ul>
                    <p>
                        If your server consistently exceeds reasonable bandwidth limits, we
                        will contact you to discuss options for reducing usage or upgrading
                        your service plan.
                    </p>
                </Section>

                <Section>
                    <h2>5. Server Downgrade Policy</h2>
                    <p>
                        To optimize resource allocation and provide cost-effective services,
                        servers with consistently low player counts may be downgraded to a
                        lower-end server configuration.
                    </p>
                    <p>
                        Specifically, if your server's average player count remains between
                        1-2 players for a period of <b>14 consecutive days</b>, it may be
                        downgraded. You will receive a notification <b>7 days</b> prior to
                        any downgrade.
                    </p>
                    <p>
                        You have the option to maintain your current server configuration by
                        contacting us and paying the difference in cost.
                    </p>
                </Section>

                <Section>
                    <h2>6. Policy Modifications</h2>
                    <p>
                        We reserve the right to modify this policy at any time. We will make
                        reasonable efforts to notify users of <b>significant changes</b>{" "}
                        that may materially affect their services, such as changes to the
                        server deletion policy or resource allocation. Notification will
                        typically be provided via email to the server owner's registered
                        email address and/or through announcements on our website or control
                        panel. It is your responsibility to review this policy periodically
                        for updates. Continued use of our services after any modifications
                        constitutes your acceptance of the revised policy.
                    </p>
                </Section>

                <Section>
                    <h2>7. Contact Information</h2>
                    <p>
                        If you have any questions about the Minecraft server policy, please
                        contact us at <span className="highlight-text">@xdpxi</span> on
                        Discord.
                    </p>
                </Section>
            </Content>

            <Footer/>
        </>
    );
}
