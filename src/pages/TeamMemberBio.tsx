/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { teamData } from '../data/teamData';

const TeamMemberBio = () => {
  const { teamId, memberId } = useParams<{ teamId: string; memberId: string }>();
  const team = teamData[teamId || ''];
  const member = team?.members.find((m) => m.id === memberId);

  if (!team || !member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-green mb-4">Member not found</h2>
          <Link to="/about" className="text-gold hover:underline">
            ← Back to About
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{member.name} | {team.name} | TEK Foundation</title>
      </Helmet>

      <div className="min-h-screen bg-cream pt-24 pb-24">
        {/* Bio Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Photo Column */}
            <div className="md:w-1/2 lg:w-5/12 shrink-0 w-full">
              <img
                src={member.photo1}
                alt={member.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bio Column */}
            <div className="md:w-1/2 lg:w-7/12 flex flex-col pt-4 md:pt-8">
              <Link
                to={`/team/${teamId}`}
                className="inline-flex items-center gap-2 text-deep-green hover:text-gold transition-colors font-bold uppercase tracking-wider text-sm mb-12 w-fit"
              >
                <ArrowLeft size={18} />
                Back to {team.name}
              </Link>

              <span className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4 block">
                {team.name}
              </span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-deep-green mb-4 leading-tight">
                {member.name}
              </h1>

              <p className="text-gold font-semibold text-xl md:text-2xl mb-10">
                {member.title}
              </p>

              <div className="w-16 h-1 bg-gold mb-12" />

              <div className="space-y-8">
                {member.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-lg md:text-xl">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberBio;
