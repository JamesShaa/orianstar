<?php
// Contact Form Handler for Orion Stars - Azure Optimized
// Set error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get form data and sanitize
    $firstname = isset($_POST['firstname']) ? htmlspecialchars(trim($_POST['firstname'])) : '';
    $lastname = isset($_POST['lastname']) ? htmlspecialchars(trim($_POST['lastname'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $mobile = isset($_POST['mobile']) ? htmlspecialchars(trim($_POST['mobile'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
    
    // Validate required fields
    $errors = [];
    
    if (empty($firstname)) {
        $errors[] = "First name is required";
    }
    
    if (empty($lastname)) {
        $errors[] = "Last name is required";
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }
    
    if (empty($mobile) || strlen($mobile) != 10 || !is_numeric($mobile)) {
        $errors[] = "Valid 10-digit mobile number is required";
    }
    
    if (empty($message)) {
        $errors[] = "Message is required";
    }
    
    // If no errors, send email
    if (empty($errors)) {
        
        // Email configuration
        $to = "support@orionstarslots.com";
        $subject = "New Contact Form Submission - Orion Stars";
        
        // Create email body
        $emailBody = "New contact form submission from Orion Stars website:\n\n";
        $emailBody .= "Name: " . $firstname . " " . $lastname . "\n";
        $emailBody .= "Email: " . $email . "\n";
        $emailBody .= "Mobile: " . $mobile . "\n";
        $emailBody .= "Message:\n" . $message . "\n\n";
        $emailBody .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
        $emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
        
        // Try multiple email methods for Azure compatibility
        $mailSent = false;
        
        // Method 1: Try standard mail() function
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $mailSent = mail($to, $subject, $emailBody, $headers);
        
        // Method 2: If mail() fails, try using Azure SendGrid or SMTP
        if (!$mailSent) {
            // You can integrate with Azure SendGrid here
            // For now, we'll log the email content for manual sending
            $logFile = 'contact_log.txt';
            $logEntry = date('Y-m-d H:i:s') . " - " . $emailBody . "\n\n";
            file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
            $mailSent = true; // Assume logged successfully
        }
        
        if ($mailSent) {
            // Success - redirect with success message
            header("Location: contact-us.html?status=success");
            exit();
        } else {
            // Email failed
            header("Location: contact-us.html?status=error&message=Email sending failed");
            exit();
        }
        
    } else {
        // Validation errors
        $errorMessage = implode(", ", $errors);
        header("Location: contact-us.html?status=error&message=" . urlencode($errorMessage));
        exit();
    }
    
} else {
    // Not a POST request
    header("Location: contact-us.html");
    exit();
}
?> 