#!/usr/bin/perl -T
# use strict;
# use warnings;
# use 5.008;

# use Data::Dumper;
# use CGI;
# my $q = CGI->new;
 
# $to = 'texasmentalhealth@gmail.com';

# $from = $q->param('email');
# $subject = $q->param('subject');
# $message = $q->param('message');;
 
# open(MAIL, "|/usr/sbin/sendmail -t");
 
# # Email Header
# print MAIL "To: $to\n";
# print MAIL "From: $from\n";
# print MAIL "Subject: $subject\n\n";
# # Email Body
# print MAIL $message;

# close(MAIL);

use strict;
use Email::Sender::Simple qw(sendmail);
use Email::Simple;
use Email::Simple::Creator;

my $email = Email::Simple->create(
header => [
  To      => '"Texas Mental Health" <texasmentalhealth@gmail.com>',
  From    => '"Anon" <anon@example.com>',
  Subject => "Testing",
],
body => "This message is short, but at least it's cheap.\n",
);
sendmail($email);