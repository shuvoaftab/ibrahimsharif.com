# WordPress, PHP, HTML Websites on Android Platform

An experimental evaluation of WordPress website in Android System

<hr>

## Specifications:

<ul>
    <li>Host: HUAWEI EVA-L19</li>
    <li>CPU: HiSilicon Kirin CPU, ARM, AArch64 rev 4 (aarch64) (8) @ 1.805GHz </li>
    <li>OS: Android 7.0 aarch64</li>
    <li>Kernel: 4.1.18-g29121ee</li>
    <li>Packages: 155 (dpkg), 1 (pkg)</li>
    <li>Shell: bash 5.2.2</li>
    <li>Terminal: /dev/pts/1</li>
    <li>Memory: 1680MiB / 2780MiB</li><br/>
    <li>ASN: Summit IIG, BD, APNIC</li>
    <li>Subnet: Public /32</li>
    <li>NAT: Private /24</li><br/>
    <li>Power Backup: Xiaomi 20,000 mAh</li>
</ul>

<hr>


<p align="center">
    <img src="slides/1_introduction.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>



<p align="center">
    <img src="slides/2_timeline_web_tech.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Brief Timeline of Relevant Web Technologies

The era of Web came through Internet, It all began in 1969 from Arpanet that can still be found agains any IPv4 rDNS records. One important thing that ARM came to the market in 1983 and the mobile chipsets and devices began to evolute to a whole new world that brought the Android Smartphones in 2008. There are rarely a few research and work can be found for Web Servers on a daily Android Smartphones. I tried to find a feasibility to bring web servers on Android Device and tested for benchmark results as well presented below. 

The dawn of the internet age emerged with the inception of ARPANET in 1969, laying the groundwork for the expansive web ecosystem we navigate today. Notably, ARM architecture entered the market in 1983, marking a pivotal moment in the evolution of mobile chipsets and devices. This evolution culminated in the introduction of Android smartphones in 2008, ushering in a new era of mobile computing.

Despite the widespread adoption of Android smartphones, there remains a scarcity of research and development concerning web servers on these devices. Recognizing this gap, I embarked on a quest to explore the feasibility of deploying web servers on Android devices. Through a series of rigorous tests and benchmarking analyses, I sought to shed light on the potential of leveraging Android devices as web servers in daily operations.
<hr>

<p align="center">
    <img src="slides/3_1st_web.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ 1st Website and Web Browsers

Before we dive into Android Server, I would like to rewind how the 1st website looked like in 1991 from a terminal and how it looked like in a web browser in 1993.
<hr>

<p align="center">
    <img src="slides/4_top_popular_php_platforms.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ A few of Today's Most Popular Platforms

Beside of HTML or static pages, I would like to compile the PHP, that was developed by Rasmus and released in 1995, for the target Android Device so that it should be able to allow me a vast area of platforms like WordPress, Magento, Laravel, etc. that are used to host more than millions of websites for individuals and websites. To make this thesis concise I will leave the testing and results of NodeJS and other JS-based platforms here.
<hr>

<p align="center">
    <img src="slides/5_price_comparison.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Approximate Price Comparison of similar Architecture-based Instances in Clouds

This comparison is approximate and dated in 2019 and updated in 2021.
<hr>

<p align="center">
    <img src="slides/6_possible_use_cases.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Possible Use Cases that Android may be of use

Due to the Hardware and Resource limitations Android surely will not be able to replace a Intel, AMD, or Apple Silicon-based Servers that are combined with sophisticated Networks and Powers as well. So I have sorted a few common and low resource consumption use cases that can be used and tried to benchmark as well.
<hr>

<p align="center">
    <img src="slides/7_android_server_diagram.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ The Initial Model similar to Combined Clouds and Stacks in Production Servers

I have simplified the common and mostly used stacks for a web server in production in the Clouds or Virtual Machines in a regular Data Center backed by years of experiences with them.
<hr>

<p align="center">
    <img src="slides/8_cost_estimation_android.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Approximate Comparison against target Android Server

Once again, the cost estimation is compared against the target Android Server I have worked. The benefits are I could let the server uptime maximum by using a 20,000 mAh Xiaomi Power Bank, the device is ARM-based and very low power consumption, the KW cost for Home is also too low, one full charge of the Power Bank resulted in 8 days uptime in a few consecutive tests while working on this. Surely, there could be a network breach or attacks like DDoS, I have used Cloudflare, Mikrotik, PfSense, Router NAT to prevent them as well. Here a Packet-based Firewall inside the server itself would be an ultimate weapon against such attacks combining with Login Failure Daemon as well that I left to test for this project for now.
<hr>

<p align="center">
    <img src="slides/9_workflow.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Workflow of How a Webpage will finally be served

Summary is that I am using my Home Network and the target device will be using NGINX, SSL Certificates inititally issued outside, Compile PHP ( latest 8.1 during the work), Compile MariaDB variant of MySQL Database, Compile Apache as well ( I left the test results for this to not overwhelm this work ). Finally combine all of them and test WordPress, a full HTML template, and a single PHP script to show the PHP configurations.
<hr>

<p align="center">
    <img src="slides/10_environment_samples.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Environment Samples

Once I configured the Android Device to be able to access from outside via SSH, most of the work was done from a MacOS Terminal remotely. The Configuration inside the Device involves Unlocking the Bootloader, Access Recovery in a Custom Mode, Obtain Root Access, Configure Debian Utilities like Busybox, Setup OpenSSH Server, etc.
<hr>

<p align="center">
    <img src="slides/11_wordpress_processing.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ WordPress Website Processing Steps

The main steps are already explained earlier. As WordPress will also be using a MySQL Database, Once the User Request reaches NGINX it will communicate with PHP Socket running in the background and WordPress PHP Script will communicate with MySQL Server in the background.
<hr>

<p align="center">
    <img src="slides/12_end_result_pages.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ WordPress Pages

The screenshots of the WordPress Homepage, A user registration page and a profile page using a Forum Plugin for the WordPress to demonstrate everything worked fine.
<hr>

<p align="center">
    <img src="slides/13_more_pages.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ HTML Template page and PHPINFO single PHP Page

More screenshots of another 2 target tests [ The subdomain being used was removed in March 2022, once various tests were done on the target device ]
<hr>

<p align="center">
    <img src="slides/14_benchmark_wordpress.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Requests vs Time result

Requests vs Times Benchmark results. The tests were done presented here by Apache benchmark tool outside the Home Network froma few different devices.

<p align="center">
    <img src="slides/15_benchmark_html.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>


<p align="center">
    <img src="slides/16_benchmark_php.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>


<p align="center">
    <img src="slides/17_request_processing_comparison.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ A Comparison of performances and responses together

I combined the results together to get a clear overview of how the android performed requests over time and requests are limited up to 1000 here.
<hr>

<p align="center">
    <img src="slides/18_further_cases.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Further Case Possibilities

Tests are not executed but the possibilites where android may fit together with High-end servers and balance loads to perform better and isolate like instances in clouds.
<hr>

<p align="center">
    <img src="slides/19_references.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ References

Acknowlegements to the major utilities used throught the testing for this thesis project.
<hr>

<p align="center">
    <img src="slides/20_end.png" alt="Ibrahim Sharif Android Server WordPress" />
</p>

### ❖ Futher Discussion

For further improvements, works, and questions this repository is now public and Discussion Section available [10-02-2024]
<hr>