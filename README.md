# 🚀 AWS-S3-Deployment Project

## Secure CI/CD Pipeline for AWS S3 Deployment

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/matthewntsiful/s3-deployment/s3_sast-scan.yml?style=flat-square&label=CI%2FCD%20Pipeline)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/matthewntsiful/s3-deployment?style=flat-square)

## Built With

![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CodeQL](https://img.shields.io/badge/CodeQL-2496ED?style=for-the-badge&logo=github&logoColor=white)
![Dependabot](https://img.shields.io/badge/Dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Deployment Workflow](#-deployment-workflow)
- [Prerequisites](#-prerequisites)
- [Setup Instructions](#-setup-instructions)
- [GitHub Secrets Configuration](#-github-secrets-configuration)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Accessibility](#-accessibility)
- [Future Enhancements](#-future-enhancements)

## 🔍 Overview

This project demonstrates a comprehensive CI/CD pipeline that deploys a responsive web application to AWS S3 using GitHub Actions. The workflow includes security scanning with CodeQL and Dependabot before deployment, ensuring that code is secure and free from vulnerabilities. The pipeline is triggered when code is pushed to the main branch, automatically running security checks and then syncing the updated application to an S3 bucket configured for static website hosting. The deployment process ignores specific files like README.md and configuration files to prevent unnecessary deployments.

## ✨ Features

- **Complete CI/CD Pipeline**: Integrated security scanning and deployment workflow
- **Security Scanning**: CodeQL analysis for JavaScript vulnerabilities and Dependabot for dependency scanning
- **Continuous Deployment**: Automatic deployment to S3 on push to main branch
- **Selective Deployment Triggers**: Path-ignore configuration to prevent unnecessary deployments
- **Secure Credential Management**: Using GitHub Secrets for secure AWS credential storage
- **S3 Static Website Hosting**: Leveraging S3's capabilities for hosting static websites
- **Responsive Web Design**: Modern responsive web application with Bootstrap framework
- **Clean Deployment**: Excludes development and configuration files from deployment

## 📁 Project Structure

```markdown
s3-deployment/
├── .github/
│   └── workflows/
│       ├── s3.yml                # Basic GitHub Actions workflow for S3 deployment
│       └── s3_sast-scan.yml      # Enhanced CI/CD pipeline with security scanning
├── css/                  # CSS stylesheets
│   ├── bootstrap-icons.css
│   ├── bootstrap.min.css
│   ├── owl.carousel.min.css
│   └── tooplate-moso-interior.css
├── fonts/                # Font files
│   ├── bootstrap-icons.woff
│   └── bootstrap-icons.woff2
├── images/               # Image assets
│   ├── avatar/           # User avatars
│   ├── shop/             # Product images
│   ├── slideshow/        # Slideshow images
│   └── ...               # Other images
├── js/                   # JavaScript files
│   ├── bootstrap.min.js
│   ├── custom.js
│   ├── jquery.min.js
│   └── ...               # Other JS files
├── index.html            # Main HTML file
├── shop-detail.html      # Product detail page
├── shop-listing.html     # Product listing page
└── README.md             # Project documentation (excluded from deployment)
```

## 🔄 Deployment Workflow

### CI/CD Pipeline with Security Scanning

A comprehensive CI/CD pipeline has been added to this project that incorporates security scanning before deployment:

1. Code is pushed to the main branch (README.md and other specified files are ignored via paths-ignore)
2. GitHub Actions workflow is triggered
3. Security scanning is performed:
   - CodeQL analysis for JavaScript vulnerabilities
   - Dependabot alerts for dependency vulnerabilities
4. After security checks pass, deployment begins:
   - Code is checked out
   - AWS credentials are configured using GitHub Secrets
   - Files are synced to the S3 bucket using the AWS CLI
5. Excluded files and directories are not uploaded to S3
6. Website is immediately available via the S3 website endpoint URL

The workflow file `.github/workflows/s3_sast-scan.yml` implements this complete CI/CD pipeline with security scanning.

## 📋 Prerequisites

- AWS account with S3 bucket configured for static website hosting
- AWS IAM user with appropriate S3 permissions
- GitHub repository
- Basic knowledge of GitHub Actions and AWS S3
- Understanding of web development fundamentals

## 🛠 Setup Instructions

### 1. S3 Bucket Setup

1. Create an S3 bucket with a unique name
2. Enable static website hosting in bucket properties
3. Configure bucket policy to allow public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

1. Set index.html as both the index and error document

### 2. Repository Setup

1. Fork or clone this repository
2. Update the web application files as needed
3. Configure GitHub Secrets (see below)
4. Push changes to the main branch to trigger the CI/CD pipeline
5. Security scans will run automatically before deployment

## 🔐 GitHub Secrets Configuration

Configure the following secrets in your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS IAM user access key ID |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM user secret access key |
| `AWS_REGION` | AWS region where your S3 bucket is located (e.g., us-east-1) |
| `S3_BUCKET_NAME` | Name of your S3 bucket |

## 🎨 Customization

### Web Application

- Modify HTML files to include your content
- Update CSS files to match your branding
- Replace images with your own assets
- Customize JavaScript functionality as needed

### Workflow

- Two workflow files are available:
  - `.github/workflows/s3.yml`: Basic S3 deployment
  - `.github/workflows/s3_sast-scan.yml`: Complete CI/CD pipeline with security scanning
- The workflows are configured with paths-ignore to prevent specific files from triggering deployments
- Security scanning includes CodeQL analysis and Dependabot integration
- Edit the workflow files to customize the deployment process
- Add additional steps like cache invalidation if using CloudFront
- Modify exclusion patterns to match your project requirements

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
1. Create your feature branch (`git checkout -b feature/amazing-feature`)
1. Commit your changes (`git commit -m 'Add some amazing feature'`)
1. Push to the branch (`git push origin feature/amazing-feature`)
1. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

The S3-Deployment project roadmap includes several exciting enhancements:

### Short-term Goals

- **CloudFront Integration**: Add CloudFront distribution for improved performance and HTTPS support
- **Cache Control**: Implement proper cache control headers for optimized content delivery
- **Automated Testing**: Add pre-deployment testing for HTML validation and broken links
- **Environment Variables**: Support for different environments (dev, staging, production)
- **Accessibility Improvements**: Enhance website accessibility by adding ARIA attributes, proper focus management, and screen reader support

### Mid-term Goals

- **CI/CD Pipeline Enhancement**: Expand the existing CI/CD pipeline with more automated testing
- **Content Versioning**: Implement versioning strategy for static assets
- **Advanced Security Scanning**: Enhance the existing security scanning with additional tools
- **Performance Optimization**: Automate image optimization and minification of CSS/JS

### Long-term Vision

- **Infrastructure as Code**: Complete AWS infrastructure management using Terraform or CloudFormation
- **Multi-region Deployment**: Deploy to multiple AWS regions for improved global performance
- **A/B Testing Support**: Infrastructure for running A/B tests on website features
- **Analytics Integration**: Automated setup of analytics and monitoring

---

## 🔒 Accessibility

The project includes accessibility improvements to ensure the website is usable by people with disabilities:

- Added descriptive title attributes to icon links
- Added screen reader text for icon-only links
- Fixed iframe missing title attribute
- Removed inline styles in favor of CSS
- Added focus styles for interactive elements
- Created accessibility-fixes.css and accessibility-fixes.js files

These changes help ensure compliance with WCAG guidelines and improve the user experience for all visitors.

## 🛡️ Dependabot Integration

This project uses [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) to automatically monitor and update dependencies. The configuration file is located at `.github/dependabot.yml`.

- Dependabot checks for updates to GitHub Actions and (optionally) npm dependencies.
- When updates are available, Dependabot will open pull requests for you to review and merge.
- No changes are made to your codebase unless you approve and merge the pull requests.

**Configuration Example:**
```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
```

For more details, see the official [Dependabot documentation](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-dependency-updates).

## Technologies Used

![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CodeQL](https://img.shields.io/badge/CodeQL-2496ED?style=for-the-badge&logo=github&logoColor=white)
![Dependabot](https://img.shields.io/badge/Dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

Powered by BlakkBrother Inc.

© 2023 BlakkBrother Inc.
All rights reserved.
