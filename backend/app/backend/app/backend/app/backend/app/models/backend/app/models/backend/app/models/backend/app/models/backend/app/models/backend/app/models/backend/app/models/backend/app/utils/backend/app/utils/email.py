import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import settings


def send_email(to_email: str, subject: str, html_content: str):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = settings.SMTP_USER
    msg["To"] = to_email

    part = MIMEText(html_content, "html")
    msg.attach(part)

    with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
        server.starttls()
        server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
        server.sendmail(settings.SMTP_USER, to_email, msg.as_string())


def send_verification_code_email(to_email: str, code: str):
    subject = "Seu código de verificação"
    html = f"""
    <div style="font-family: Arial, sans-serif;">
        <h2>Confirme seu e-mail</h2>
        <p>Seu código de verificação é:</p>
        <h1 style="letter-spacing: 5px;">{code}</h1>
        <p>Este código expira em 10 minutos.</p>
    </div>
    """
    send_email(to_email, subject, html)
